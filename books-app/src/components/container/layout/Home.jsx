import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from '../../presentational/layout/HomePage';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HomePage props={this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
      errors: state.errors
    };
  };

export default connect(
    mapStateToProps,
  )(Home);