import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic: 'angular'
        }
    }
    handleUsername = (event)=>{
        this.setState({
            username: event.target.value
        })
    }

    handleComments = (event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopic = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
        return (
        
               <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input value={this.state.username} type="text" onChange={this.handleUsername}/>
                <br></br>
                <br></br>
                <br></br>
                <label>Comments</label>
                <textarea value={this.state.comments}  onChange={this.handleComments}></textarea>
                <br></br>
                <br></br>
                <br></br>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <br></br>
                <br></br>
                <br></br>
                <button type="submit">Submit</button>
               </form>
           
        )
    }
}

export default Form
