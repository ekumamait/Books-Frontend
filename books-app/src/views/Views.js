import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from '../store/store';
import Login from '../components/container/auth/Login';
import Register from '../components/container/auth/Register';
import Landing from '../components/presentational/layout/LandingPage';
import Home from '../components/container/layout/Home';

class Views extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path="/home" component={Home} />
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
                  <Landing {...props} />
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