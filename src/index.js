//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Styles
import './index.css';

//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducer';
//COMPONENTS
import App from './App';


const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
   ,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
