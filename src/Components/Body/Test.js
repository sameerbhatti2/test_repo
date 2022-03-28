import React, { useState } from 'react'

const Test = () => {

    const [counter,setCounter] = useState(1);

    const inc = ()=>{
        if(counter < 10){
            // let sq = Math.pow(counter,2)
            // console.log(sq);
            setCounter(counter**2)
        }
    }
    const dec = ()=>{
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

  return (
    <div 
    style={{display:"flex",justifyContent:"center",
    alignItems:"center",
    width:"100vw",
    height:"100vh"
    }}>
    

    <button onClick={()=>dec()} >dec</button>
    <input type='number' value={counter} />
    <button  onClick={()=>inc()} >inc</button>
    
    </div>
  )
}

export default Test