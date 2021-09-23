import React from 'react'

function Person({person}) {
    return (
        <>
            <h1>I am {person.name}. I am{person.age} </h1>
        </>
    )
}

export default Person
