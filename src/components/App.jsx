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
      food: 10,
      happiness: 50,
      sleep: 70
    }
  }

  componentDidMount() {
      setInterval(()=>this.sadness(),3000);
      setInterval(()=>this.decreaseFood(),2000);
      setInterval(()=>this.decreaseSleep(),5000);
  }

  componentDidUpdate(){
    if(this.state.food <= 0){
      setTimeout(()=>this.hurt(),2000);
    }
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
      newLife+=0.5;
      this.setState({life:newLife})
    } else if (this.state.life == 0 ){

    }

  }

  render(){
    return (
      <div>
        <style jsx>{`
            img {
              max-width: 200px;
            }
              `}
        </style>
        <h1>Welcome to your Tamagotchi!</h1>
        <img src="https://vignette.wikia.nocookie.net/tamagotchi/images/6/61/Hapihapitchi_anime.PNG/revision/latest?cb=20110919001912"></img>

      <Life newLife = {this.state.life}/>
      <Food newFood = {this.state.food}/>
      <Happiness newHappiness = {this.state.happiness}/>
      <Sleep newSleep = {this.state.sleep}/>

      </div>
    )
  }
}
export default App
