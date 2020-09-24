import React from 'react';
import './App.css';
import CountUp from './Components/CountUp'



class App extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return (
      <div className="App">
  
      <CountUp />
    </div>
    )
  }
}


export default App;
