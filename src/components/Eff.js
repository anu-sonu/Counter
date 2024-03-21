import React, { useEffect, useState } from 'react'

const Eff = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("Mitu")

    useEffect(()=>{
        console.log("update components")
    },[name])

    function handleClick(){
        setCount(count+1)
    }

    function handleName(){
        setName("pari")
    }

  return (
    <div>
      <h1>This Is My Counter Application</h1>
      <h2>COUNT:- {count}</h2>
      <button onClick={handleClick}>Add Sum Data</button>
      <button onClick={handleName}>Add</button>
    </div>
  )
}

export default Eff
