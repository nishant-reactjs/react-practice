import React, { memo } from 'react'

const ChildA = ({handleChange }) => {
    console.log("Hello from child A");
  return (
    <div>
        <h5>
            This is ChildA
        </h5>
        <button onClick={()=> handleChange(3)}>Inside Child</button>    
    </div>
  )
}

export default memo(ChildA)