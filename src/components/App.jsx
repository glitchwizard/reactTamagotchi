import React from 'react';
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import Life from './Life';
import Sleep from './Sleep';
import Happiness from './Happiness';
import Food from './Food';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      life: 100,
      food: 100,
      happiness: 100,
      sleep: 100
    }
    this.handleMakeSleep=this.handleMakeSleep.bind(this);
    this.handleMakeEat=this.handleMakeEat.bind(this);
    this.handleMakeHappiness=this.handleMakeHappiness.bind(this);
  }

  componentDidMount() {
      setInterval(()=>this.sadness(),30000);
      setInterval(()=>this.decreaseFood(),10000);
      setInterval(()=>this.decreaseSleep(),20000);
  }

  componentDidUpdate(){
    if(this.state.food <= 0 || this.state.sleep <=0 || this.state.happiness <= 0 || this.state.life < 100){
      setTimeout(()=>this.hurt(),2000);
    }
  }

  sadness(){
      let newHappiness = this.state.happiness;
      if (this.state.happiness > 0){
        newHappiness-=10;
        this.setState({happiness:newHappiness});
      }
  }

  decreaseFood() {
    let newFood = this.state.food;
    if (this.state.food > 0 ){
      newFood-=2;
      this.setState({food:newFood})
    }
  }

  decreaseSleep() {
    let newSleep = this.state.sleep;
    if (this.state.sleep > 0) {
      newSleep-=2;
      this.setState({sleep:newSleep})
    }
  }

  hurt() {
    if (this.state.food <= 0 && this.state.life > 0){
      let newLife = this.state.life;
      newLife-=0.25;
      this.setState({life:newLife})
    } else if (this.state.happiness <= 0 && this.state.life > 0){
      let newLife = this.state.life;
      newLife-=0.25;
      this.setState({life:newLife})
    } else if (this.state.sleep <= 0 && this.state.life > 0){
      let newLife = this.state.life;
      newLife-=0.25;
      this.setState({life:newLife})
    } else if ((this.state.food > 0 && this.state.happiness > 0  && this.state.sleep > 0 && this.state.life < 100)){
      let newLife = this.state.life;
      newLife += 0.25;
      this.setState({life:newLife})
    } else if (this.state.life == 0 ){

    }
  }

  handleMakeSleep(){
    let newSleep = this.state.sleep;
    newSleep+=8;
    this.setState({sleep:newSleep})
  }

  handleMakeEat(){
    let newFood = this.state.food;
    newFood+=5;
    this.setState({food:newFood})
  }

  handleMakeHappiness() {
    let newHappiness = this.state.happiness;
    newHappiness+=10;
    this.setState({happiness:newHappiness})
  }


  render(){
    return (
      <div>
        <style jsx>{`
            img {
              width: 100%;

            }

            .gameUnit {
              background-color: red;
              border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
              height: 450px;
              width: 25%;

              border: 10px solid red;
              margin: auto;
              display: block;
              text-align: center;
              position: relative;
            }

            .gameDisplay{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: white;
              padding: 20px;
              border-radius: 50px;
              border: 10px solid gray;
              width: 55%;
            }

            .button{
              border-radius: 50%;
              background-color: green;
              border: 2px solid #4CAF50;
              padding: 15px;
              display: inline-block;
              cursor: pointer;
              position: absolute;
              bottom: 5%;
              transform: translate(-50%, -50%);
            }

            .button:active{
              opacity:0.5;
              border: 2px solid #4CAF50;
            }

            .middle{
              bottom: 5%;
              left: 50%;
            }

            .right{
              bottom: 10%;
              left: 70%;
            }

            .left{
              bottom: 10%;
              left: 30%;
            }

              `}
        </style>
        <h1>Welcome to your Tamagotchi!</h1>
        <div className="gameUnit">
          <div className="gameDisplay">
            <img src="https://66.media.tumblr.com/437aa40da752cbdc55b000630ab0e387/tumblr_pc891wGELY1uon9hao1_250.gif" />
          </div>
          <button className="button left"></button>
            <button className="button middle"></button>
          <button className="button right"></button>
        </div>

      <Life newLife = {this.state.life}/>
      <Food newFood = {this.state.food} onMakeEat= {this.handleMakeEat}/>
      <Happiness newHappiness = {this.state.happiness} onMakeHappiness = {this.handleMakeHappiness}/>
      <Sleep newSleep = {this.state.sleep} onMakeSleep = {this.handleMakeSleep}/>

      </div>
    )
  }
}
export default App
