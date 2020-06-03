import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from '../store/store';
import Login from '../components/container/auth/Login';
import Register from '../components/container/auth/Register';
import LandingPage from '../components/container/layout/LandingPage';

class Views extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" render={props =>
              localStorage.getItem('token')? (
                <Redirect to="/books" />
                ) : (
                <Login {...props} />
                )
              } />
            <Route exact path="/register" component={Register} />
            <Route exact path="/books" render={props =>
              localStorage.getItem('token')? (
                  <LandingPage {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }  />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default Views;