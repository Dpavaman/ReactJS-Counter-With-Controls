import React, {Component} from 'react'

class Count extends Component {
    constructor(){
        super()
        this.state = {
            count :  0
        }
    }

    plus=()=>{
        let count = this.state.count
        this.setState({
            count : count+1
        })
    }

    minus = () =>{
        let count = this.state.count
        this.setState({
            count : count - 1
        })
    }
    

    reset = () =>{
        this.setState({
            count : 0
        })
    }

    render(){
        return(
            <div>
                <h1> Counting : {this.state.count} </h1>
                <button onClick={this.plus}>Click to Count Up</button>
                <button onClick={this.reset}>Click to Reset</button>
                <button onClick={this.minus}>Click to Count Down</button>
            </div>
        )
    }
}

export default Count