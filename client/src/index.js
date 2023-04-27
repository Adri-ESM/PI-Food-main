import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Provider. Cada objeto Context viene con un componente Provider de React que 
// permite que los componentes que lo consumen se suscriban a los cambios del contexto. 
// El componente Provider acepta una prop value que se pasará a los componentes 
// consumidores que son descendientes de este Provider .