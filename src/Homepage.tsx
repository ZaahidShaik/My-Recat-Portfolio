import React , { useState, useEffect, createContext } from 'react';
import './styles/Homepage.css';


function Homepage() {

  const [darkmode, setDarkMode] = React.useState(false)
  return (
    <div className={darkmode ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className='button-container'>
          <button onClick={() => setDarkMode(prevTheme => !prevTheme)}>
            Mode Button 
          </button>
        </div>
      </nav>
      <div className='content'>
        <h1>{darkmode ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>
          Do take a note of the <code>color</code> property in the nav bar.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
