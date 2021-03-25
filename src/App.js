import React ,{Component}from 'react'
import Feedback from "./components/feedback/Feedback.js"
import Statistics from "./components/statistics/Statistics"
import Notification from "./components/notification/Notification"

const INITIAL_STATE ={
  good: 0,
neutral: 0,
bad: 0,
}
class App extends Component {
  state = { ...INITIAL_STATE };

  totalSum=(a,b,c)=>{
    return a+b+c;
  }
  positivePercentage=(a,b,c)=>{
    return Math.round((a/(a+b+c))*100)
  }
  handClickToBtn = e => {
    const name = e.target.name;
       this.setState(prevStat=> ({[name]: prevStat[name] + 1}))}
  render() {
    const {good,neutral,bad}=this.state;
    return (
      <>
      <Feedback state={this.state} handClickToBtn={this.handClickToBtn}/>
      {good===0&&neutral===0 &&bad===0 ?
      <Notification message="No feedback given"/> : 
      <Statistics state={this.state} total={this.totalSum} positivePercentage={this.positivePercentage}/>}
      </>)
  }
}

export default App;