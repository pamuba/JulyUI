import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
    return (
        <>
            <h1 className={`${className} font-xl`}>Hello World</h1>
        </>
    )
}

export default Stylesheet
