import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error('Not a hero')
    }
    return (
        <>
            {heroName}<br></br>
        </>
    )
}

export default Hero
