import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false);
    
    const getValue = () =>{
        setMyNum(myNum + 1)
    }

    const countNumber = (num) =>{
        console.log("counter", num)
        for (let i = 0; i <= 5000; i++) {
            console.log(i);
        }
        return num;
    }

    // const checkData = countNumber(myNum);

    const checkData = useMemo(()=>{ 
        return countNumber(myNum)
    }, [myNum])

  return (
    <div className='App'>

        <button onClick={getValue} style={{backgroundColor: "red"}}>Counter</button>
        <p>My new number: {checkData}</p>

        <button onClick={()=> setShow(!show)}>{show ? 'You Clicked me' : 'Click me plzz'}</button>
    </div>
  )
}

export default UseMemo