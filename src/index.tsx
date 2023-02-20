import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles/index.css';
import Homepage from './Homepage';
// import reportWebVitals from './reportWebVitals';

import _ from 'lodash';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Homepage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
