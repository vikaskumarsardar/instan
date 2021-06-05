import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import New from './new';
import INC,{Name} from './INC';
import N from './N';

ReactDOM.render(
  <React.StrictMode>
    {/* <New ne={(k,b)=>b?k + "    "+ b:"yuiyiu"}>swapan chorua hai</New> */}
    <Router>
    {/* <N/> */}
    {/* <Name/> */}
    <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
