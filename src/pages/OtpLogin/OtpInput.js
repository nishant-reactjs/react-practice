import React, { useState, useRef, useEffect } from 'react'

const OtpInput = ({length, onOtpSubmit}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))

    const inputRef = useRef([])

    useEffect(()=>{ 
        if(inputRef.current[0]){
            inputRef.current[0].focus();
        }
    }, [])
    
    const handleChange=(index, e)=>{
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];

        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const cominedOtp = newOtp.join('');

        if (cominedOtp.length === 4)  onOtpSubmit(cominedOtp)

        if(value && index < length - 1 && inputRef.current[index + 1]){
            inputRef.current[index+1].focus();
        }
    }
    const handleClick=(index, e)=>{
        inputRef.current[index].setSelectionRange(1, 1);

        if(index > 0 && !otp[index - 1]){
            inputRef.current[otp.indexOf('')].focus();
        }
    }
    const handleKeyDown=(index, e)=>{
        console.log(e.key, e.key === "Backspace");
        if(e.key === "Backspace" && !otp[index] && index>0 && inputRef.current[index - 1]){
            inputRef.current[index-1].focus();
        }
    }

  return (
    <div>{otp.map((value, index)=>{
        return (
        <input 
        key={index}
        ref={(input) => (inputRef.current[index] = input)}
        type='text' 
        value={value} 
        onChange={(e)=> handleChange(index, e)} 
        onClick={()=>handleClick(index)}
        onKeyDown={(e)=>handleKeyDown(index, e)}
        className='otpInput'
        />)
    })}</div>
  )
}

export default OtpInput