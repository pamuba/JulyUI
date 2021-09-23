import React, { Component } from 'react'

class RegComponent extends Component {
    render() {
        console.log("Regular Component")
        return (
            <>
                Regular Component {this.props.name} <br></br>
            </>
        )
    }
}

export default RegComponent
