import React, { Component } from 'react'
import UpdatedComponent from './withCounters'

class ClickCounter extends Component { 
    render() {
        // const { count } = this.state
        const {count, incrementCount} = this.props
        return (
            <>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </>
        )
    }
}

export default UpdatedComponent(ClickCounter)
