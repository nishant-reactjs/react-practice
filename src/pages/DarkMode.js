import React, { useState } from "react";
import "../assets/darkMode.css";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    newTheme === "light"
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    setTheme(newTheme);
  };

  return (
    <>
      <div className='app' data-theme={theme}>
        <div className='toggle-theme-wrapper'>
          <span>☀️</span>
          <label className='toggle-theme' htmlFor='checkbox'>
            { 
              theme === 'light' 
              ?  
              <input type='checkbox' id='checkbox' onChange={switchTheme} />
              :
              <input checked type='checkbox' id='checkbox' onChange={switchTheme} />
            }
            <div className='slider round'></div>
          </label>
          <span>🌒</span>
        </div>
      </div>
    </>
  );
};

export default DarkMode;
