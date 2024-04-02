import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Button } from 'react-bootstrap';

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </Button>
  );
};

export default ThemeToggleButton;
