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
      life: 50,
      food: 52,
      happiness: 100,
      sleep: 100,
      foodToggle: false,
      foodToggleClassName: "foodIconHide",
      classChecks: 0
    }
    this.handleMakeSleep=this.handleMakeSleep.bind(this);
    this.handleMakeEat=this.handleMakeEat.bind(this);
    this.handleMakeHappiness=this.handleMakeHappiness.bind(this);
  }

  componentDidMount() {
      setInterval(()=>{
        this.sadness();
        this.decreaseFood();
        this.decreaseSleep();
      },1000);
  }

  componentDidUpdate(){
    setTimeout(()=>{
      if(this.state.food <= 0 || this.state.sleep <=0 || this.state.happiness <= 0 || this.state.life < 100){
        this.hurt();
      }

      if (this.state.food <=50){
        this.toggleIcon();
        console.log("");
        console.log('timeout running');
        let newClassChecks = this.state.classChecks;
        newClassChecks += 1;
        this.setState({classChecks : newClassChecks});
        console.log("newClassChecks: " + newClassChecks);
      }

      if (this.state.food > 50 && this.state.foodToggleClassName === "foodIconShow") {
        this.setState({foodToggleClassName: "foodIconHide"})
      }
    }, 100000)
  }

  sadness(){
      let newHappiness = this.state.happiness;
      if (this.state.happiness > 0){
        newHappiness-=1;
        this.setState({happiness:newHappiness});
      }
  }

  decreaseFood() {
    let newFood = this.state.food;
    if (this.state.food > 0 ){
      newFood-=1;
      this.setState({food:newFood})
    }
  }

  decreaseSleep() {
    let newSleep = this.state.sleep;
    if (this.state.sleep > 0) {
      newSleep-=1;
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

  toggleIcon(){
    setTimeout(() => {
      let currentToggle = this.state.foodToggle;
      // console.log('ToggleIcon running');
      // console.log(this.state.foodToggle);
      // console.log('');
      // console.log('currentToggle');
      // console.log(currentToggle);
      if (currentToggle === false){
        this.setState({
          foodToggleClassName: "foodIconShow",
          foodToggle: true
        })
      } else if (currentToggle === true){
        this.setState({
          foodToggleClassName: "foodIconHide",
          foodToggle: false
        });
      }
    }

  ,5000);

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

            .icons{
              width: 25px;
              display: inline-block;
              padding-bottom: 25px;
              margin-right: 15px;
            }

            .blinking{
              animation:blinkingText 0.8s infinite;
            }

            .sadIconHide {
              opacity: 0;
            }

            .sleepIconHide {
              opacity: 0;
            }

            .foodIconHide {
              opacity: 0;
            }

            .sadIconShow {
              opacity: 1;
            }

            .sleepIconShow {
              opacity: 1;
            }

            .foodIconShow {
              opacity: 1;
            }
              `}
        </style>
        <h1>Welcome to your Tamagotchi!</h1>
        <p>{this.state.foodToggleClassName}!!!!</p>
        <div className="gameUnit">
          <div className="gameDisplay">
            <img className={'icons ' + this.state.foodToggleClassName} src="https://banner2.kisspng.com/20180404/syq/kisspng-fizzy-drinks-computer-icons-meal-food-lunch-food-icon-5ac500dc6676c0.3955393615228602524197.jpg" />
            <img className="icons sadIconHide" src="https://c7.uihere.com/files/244/263/782/happiness-computer-icons-emoticon-50.jpg" />
            <img className= "icons sleepIconHide" src="https://static.thenounproject.com/png/29979-200.png" />
            <img src="https://66.media.tumblr.com/437aa40da752cbdc55b000630ab0e387/tumblr_pc891wGELY1uon9hao1_250.gif" />
          </div>
          <button className="button left blinking" onClick={this.handleMakeEat}></button>
            <button className="button middle" onClick={this.handleMakeHappiness}></button>
          <button className="button right" onClick={this.handleMakeSleep}></button>
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
