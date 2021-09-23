import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComponent from './RegComponent'


class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"John"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"John"
            })
        }, 2000)
    }
   
    render() {
        console.log('***************************Parent Component********************')
        return (
            <div>
                Parent Component<br></br>
                <RegComponent name={this.state.name}/>
                <PureComp  name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
