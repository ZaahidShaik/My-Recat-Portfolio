import React , { useState } from 'react';
import '../src/styles/Homepage.css';
import Introduction from './Introduction';
import { useTrail, animated as a } from '@react-spring/web';




function Homepage() {

  const [darkmode, setDarkMode] = useState(false);
  const [open, set] = useState(true);
  return (
    <div className={darkmode ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className='button-container'>
          <button onClick={() => setDarkMode(prevTheme => !prevTheme)}>
            Mode Button 
          </button>
        </div>
      </nav>

      {/* <div className='content'>
        <h1>{darkmode ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>
          Do take a note of the <code>color</code> property in the nav bar.
        </p>
      </div> */}

      <Introduction/>

    </div>
  );
}

export default Homepage;
