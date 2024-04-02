import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  };

  const textFieldStyle = {
    margin: '0.5rem',
    width: '300px',
  };

  const buttonStyle = {
    margin: '1rem',
    width: '300px',
  };

  const handleSignup = () => {
    // Here you can implement your signup logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container style={containerStyle}>
      <h2>Sign Up</h2>
      <TextField
        style={textFieldStyle}
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        style={textFieldStyle}
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        style={buttonStyle}
        variant="contained"
        color="primary"
        onClick={handleSignup}
      >
        Sign Up
      </Button>
    </Container>
  );
}

export default SignupPage;
