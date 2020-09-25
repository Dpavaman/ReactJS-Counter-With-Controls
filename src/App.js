import React from 'react';
import './App.css';
import Count from './Components/Count'



class App extends React.Component{
  constructor(props){
    super()
  }

  render(){
    return (
      <div className="App">
      <Count />
    </div>
    )
  }
}


export default App;
