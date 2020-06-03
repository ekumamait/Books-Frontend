import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../../actions/AuthActions';
// import img from '../../images/3fs.JPG';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
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
      window.localStorage.setItem('token', registerUser.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      user_name: this.state.username,
      user_email: this.state.email,
      user_password: this.state.password
    };
    this.props.registerUser(userData, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <div className="card mx-auto card-default align-item-center justify-content-center" style={{width: "500px"}}>
          <div className="card-body">
          <form>
            <div className="form-group">
            <h5 class="card-title text-center">Have an account Log In <Link to="/">here</Link></h5>
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
              <label for="exampleInputEmail1">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email"
                name="email"
                aria-describedby="emailHelp"
                name="email"
                placeholder="name@example.com"
                // value={this.state.email}
                // onChange={this.onChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
            <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">By submiting, you agree to the <a href="#">Terms and Conditions</a> here.</label>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propType = {
  registerUser: PropTypes.func.isRequired,
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
  { registerUser }
)(withRouter(Register));