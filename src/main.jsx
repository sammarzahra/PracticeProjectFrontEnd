import React from 'react'
 import ReactDOM from 'react-dom/client'
  
 import App from './App.jsx'
 import './index.css'
// import { Provider } from "react-redux";
// import store from "././Redux/store.jsx";


//  ReactDOM.render(
//   <Provider store={store}>
//     <App />
//    </Provider>,
//   document.getElementById("root")
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      
        <App />
    
   
  </React.StrictMode>,
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux'; // Import Redux Provider
// import { BrowserRouter } from 'react-router-dom';
//  import store from "../src/Redux/store.jsx" // Import your Redux store
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}> 
//       <BrowserRouter> {/* Wrap the App component with BrowserRouter */}
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
// );


// import React from "react";
// import ReactDOM from "react-dom";
//  import { Provider } from "react-redux";
// // import store from "./Redux/store";
// import App from "./App";

// // ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )