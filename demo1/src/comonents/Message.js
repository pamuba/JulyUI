import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        //why the call to the super
        super(props)
        this.state = {
             message:'Welcome to Stark Ind.'
        }
    }
    //dont have to bind the this keywork
    changeMessage =()=>{
       this.setState({
           message: 'Welcome to Tesla'
       })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
            </>
        )
    }
}

export default Message
