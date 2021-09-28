import React, {useState} from 'react'

function HookContainer2() {
    const[name, setName] = useState({firstName:'', lastName:''})
    return (
        <>
            <input value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})} type="text"></input>
            <input value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})} type="text"></input>
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </>
    )
}

export default HookContainer2
