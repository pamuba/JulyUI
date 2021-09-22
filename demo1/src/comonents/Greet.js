import React, { Fragment } from 'react'


const Greet = (props) => {
    return (
        <>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>

        // <>
        //     <h1>Hello {name} a.k.a {heroName}</h1>
            
        // </>
    )

    // return React.createElement('div',{id:"div"}, React.createElement('h1', null, 'Hello World'))
}

export default Greet
