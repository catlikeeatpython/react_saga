import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../src/layout/App.jsx';
import 'antd/dist/antd.css';
import store from './store';
import './index.css'

ReactDOM.render(
  <Router>
    <Provider store={store}>
        <Switch>
            <Route path='/' component = { App } />
        </Switch>
    </Provider>
  </Router>
  
, document.getElementById('root'));
