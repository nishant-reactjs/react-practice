import React, { useRef, useState } from 'react'

const UseRef = () => {
    const[myData, setMyData] = useState("");

    const inputRef = useRef("");
    
    const handleSubmit = () =>{ 
        inputRef.current.style.backgroundColor = 'aqua'
        inputRef.current.focus();
        console.log(inputRef)
    }
  return (
    <div className='App'>
        UseRef
        <br />
        <input ref={inputRef} type="text" value={myData} onChange={(e)=> setMyData(e.target.value)} />
        <br />
        <button type='submit' onClick={handleSubmit}>save</button>
        <p>number of renders: {}</p>
    </div>
  )
}

export default UseRef