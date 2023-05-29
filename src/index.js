import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeContextProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



