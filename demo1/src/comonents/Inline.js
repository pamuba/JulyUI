import React from 'react'

//style as a js object
const heading = {
    fontSize : '72px',
    color:'blue'
}

function Inline() {
    return (
        <>
           
             <h1 className='error'>ERROR</h1>
             <h1 style={heading}>Inline</h1>
            
        </>
    )
}

export default Inline
