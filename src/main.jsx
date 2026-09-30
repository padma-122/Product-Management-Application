// import react from 'react'
// import ReactDOM from "react-dom/client";
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import store from './Component/Redux/Store.js'
// import { Provider } from "react-redux";


// createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//     </Provider>
//     </React.StrictMode>
    
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Component/Redux/Store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);