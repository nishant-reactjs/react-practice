import React, { useState, useRef } from 'react';

function NewOtp() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState(['', '', '', '']);
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Send request to server to send OTP
    try {
      // Assuming you have an API function to send OTP
      // const response = await sendOTP(mobileNumber);
      // Handle response
      setShowOtp(true)
      setLoading(false);
      // Proceed to OTP verification
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
      setLoading(false);
    }
  };

  const handleOTPVerification = async () => {
    setLoading(true);
    // Send request to server to verify OTP
    try {
      // Assuming you have an API function to verify OTP
      // const response = await verifyOTP(mobileNumber, otp.join(''));
      // Handle response
      setLoading(false);
      // Proceed with login if OTP is verified
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      setLoading(false);
    }
  };

  const handleInputChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move focus to the next input box
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <>
      <h2>OTP Login</h2>
      {error && <div>{error}</div>}
      {!showOtp ? 
      (<form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </button>
      </form>) : (
        <form onSubmit={handleOTPVerification}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={{ width: '2rem', marginRight: '0.5rem' }}
              ref={(input) => (inputRefs.current[index] = input)}
              required
            />
          ))}
          <button type="submit" disabled={loading}>
            {loading ? 'Verifying OTP...' : 'Verify OTP'}
          </button>
        </form>
      )}
      

    </>
  );
}

export default NewOtp;
