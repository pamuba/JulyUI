import React from 'react'
import Person from './Person'

function NameList() {

    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h1>{name}</h1>)
    // return <>{nameList}</>

    const persons = [
        {
            id:1,
            name:'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id:2,
            name:'Clark',
            age: 35,
            skill: 'Angular'
        }
    ]

    const perosnList = persons.map(person => (
        <Person key={person.id} person = {person}></Person>
    ))
    return <>{perosnList}</>

}

export default NameList
