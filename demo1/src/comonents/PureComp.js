import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <>
                Pure Component  {this.props.name}
            </>
        )
    }
}

export default PureComp
