import React, { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneLoginForm = () => {
  const [number, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (number.length < 10 || regex.test(number)) {
      alert("Invalid number");
      return;
    }
    setShowOtp(true);
  };

  const onOtpSubmit = (otp) => { 
    alert('Login successfull')
  }
  return (
    <>
        {!showOtp ? (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={number}
              placeholder='Enter phone number'
              onChange={handleChange}
            />
            <br />
            <button className="btn btn-primary" type='submit'>save</button>
          </form>
        ) : (
          <>
            <div>
              <p>Otp sent to {number}</p>
              <OtpInput length={4} onOtpSubmit = {onOtpSubmit} />
            </div>
          </>
        )}
    </>
  );
};

export default PhoneLoginForm;
