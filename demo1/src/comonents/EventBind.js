import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
             message:"Hello World"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        console.log(this)
        this.setState({
            message:"GoodBey!!"
        })
    }
    
    render() {
        return (
            <>
               <h1>{this.state.message}</h1> 
               {/* <button onClick={this.clickHandler.bind(this)}>Change Message</button> */}
               <button onClick={this.clickHandler}>Change Message</button>
            </>
        )
    }
}

export default EventBind
