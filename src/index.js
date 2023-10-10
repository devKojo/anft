import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './App';
import './assets/styles/globals.css';
import "./assets/styles/style.css";
import "./assets/styles/css/normalize.css";
import "./assets/styles/css/vendor.css";
import "./assets/styles/fonts/icomoon.css";
import "./assets/styles/css/swiper-bundle.min.css";




import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HomePage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
