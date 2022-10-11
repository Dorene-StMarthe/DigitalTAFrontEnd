import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const linkToCreate = () => {
//   // window.open('route')
// }

// const linkToLogin= () => {
//   // window.open('route')
// }

// const linkToSignUp= () => {
//   // window.open('route')
// }

// const linkToView= () => {
//   // window.open('route')
// }

root.render(
  <React.StrictMode>
    {/* <button id="createButton" onClick={linkToCreate()}>Create</button>
    <button id="loginButton" onClick={linkToLogin()}>Login</button>
    <button id="signUpButton" onClick={linkToSignUp()}>Sign Up</button>
    <button id="viewButton" onClick={linkToView()}>Change view</button> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();