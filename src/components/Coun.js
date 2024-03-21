import React from 'react'
import { useState } from 'react';
  const Coun = () => {
    const [counter,setCounter]=useState(0)
    let handleInc=()=>{
      console.log(counter+1)
      setCounter(counter+1)
    }
    let handleDec=()=>{
      console.log(counter-1)
      setCounter(counter-1)
    }
    return (
      <div>
       <h1>COUNTER:-{counter}</h1>
       <button type="button" onClick={handleInc} className='btn btn-success mb-3'>IncreMent</button>
       <br></br>
       <button type="button" onClick={handleDec} className='btn btn-danger'>DecreMent</button>
      </div>
    )
}

export default Coun
