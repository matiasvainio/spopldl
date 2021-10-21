import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateContextProvider } from './context/StateContext';
import { reducer, initState } from './reducers/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider initialState={initState} reducer={reducer}>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
