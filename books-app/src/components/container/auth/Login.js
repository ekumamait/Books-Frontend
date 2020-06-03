import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../../actions/AuthActions';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      if (nextProps.errors.email) {
        this.setState({ emailError: nextProps.errors.email });
      } else if (nextProps.errors.password) {
        this.setState({ passwordError: nextProps.errors.password });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      window.localStorage.setItem('token', loginUser.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      Username: this.state.username,
      Password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    return (
      <div className="container">
      <div className="card mx-auto card-default align-item-center justify-content-center" style={{width: "500px"}}>
        <div className="card-body">
        <form>
          <div className="form-group">
            <h2>
              {/* <img src={img} width="30%" /> */}
            </h2>
            <h3 className="card-title text-center">Read Brilliant Writings</h3>
            <h5 className="text-center">
              Have no account sign up <Link to="/register">here</Link>
            </h5>
            <label for="exampleInputPassword1">Username</label>
            <input 
              type="text" 
              className="form-control" 
              id="username"
              name="username"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              // value={this.state.password}
              // onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              name="password"
              placeholder="Enter password"
              // value={this.state.password}
              // onChange={this.onChange}
            />
          </div>
          <button 
            type="submit" 
            id="signinButton" 
            name="submit" 
            value="Sign In" 
            className="btn btn-warning"
          >Submit
          </button>
        </form>
        </div>
      </div>
    </div>
    );
  }
}

Login.propType = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));