import React, {useState, useEffect} from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // componentDidMount, componentDidUpdate
    useEffect(()=>{
        console.log('useEffect - Updaint document title')
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}></input>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default UseEffect1
