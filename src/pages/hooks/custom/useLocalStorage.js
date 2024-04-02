import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  // Get the stored value from localStorage, or use the default value
  const storedValue = localStorage.getItem(key) || defaultValue;

  // Set up state to track the current value
  const [value, setValue] = useState(storedValue);

  // Update localStorage whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  // Function to remove the value from localStorage
  const remove = () => {
    localStorage.removeItem(key);
    setValue(defaultValue);
  };

  return [value, setValue, remove];
};

export default useLocalStorage;
