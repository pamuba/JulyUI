import React, { Component } from 'react'
import UpdatedComponent from './withCounters'

class HoverCounter extends Component {
    render() {
        // const { count } = this.state
        const {count, incrementCount} = this.props
        return (
            <>
                <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
            </>
        )
    }
}

export default UpdatedComponent(HoverCounter)
