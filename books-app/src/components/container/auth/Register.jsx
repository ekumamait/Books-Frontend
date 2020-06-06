import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../../actions/AuthActions';
import RegistrationPage from '../../presentational/auth/Register';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.errors) {
      if (nextProps.errors.email) {
        this.setState({ emailError: nextProps.errors.email });
      } else if (nextProps.errors.password) {
        this.setState({ passwordError: nextProps.errors.password });
      } else {
        this.setState({ notFoundUser: nextProps.errors.error });
      }
    } else {
      // window.localStorage.setItem('token', registerUser.nextProps.user.token);
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    
    this.props.registerUser(userData, this.props.history);
  }

  render() {
    return (
      <RegistrationPage props={this.props} submit={this.onSubmit} change={this.onChange}/>
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