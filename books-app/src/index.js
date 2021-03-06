import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '../src/store/store';

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

