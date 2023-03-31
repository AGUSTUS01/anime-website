import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message: "I STILL LOVE YOU!!"
        }
    }
    response(){
        this.setState({
            Message: "I LOVE YOU TOO!!"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.Message} </h1>
        <button onClick={()=>this.response()}>submit</button>
      </div>
    )
  }
}

export default Message
