import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
    
        // if(this.state.isLoggedIn){
        //     return <div>Welcome John</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome John</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <>{message}</>


        // return(
        //     this.state.isLoggedIn ? (<div>Welcome John</div>) : 
        //     (<div>Welcome Guest</div>)
        // )


        return this.state.isLoggedIn && <div>Welcome John</div>


    }
}

export default UserGreeting
