import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from '../../presentational/layout/HomePage';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(event) {        
    //     
    // }

    // componentDidMount() {
    //    
    // }

    render() {
        const clickEvent = {
            handleClick: this.handleClick,
        }
        return (
            <HomePage props={this.props} clickEvent={clickEvent} />
        );
    }
}

HomePage.propTypes = {

};

const mapStateToProps = state => {
    return {
    //   errors: state.errors
    };
  };


export default connect(
    mapStateToProps,
  )(Home);