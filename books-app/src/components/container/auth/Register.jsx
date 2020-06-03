import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../../actions/AuthActions';
import RegistrationPage from '../../presentational/auth/Register';
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

  UNSAFE_componentWillReceiveProps(nextProps) {
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
      <RegistrationPage props={this.props} />
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