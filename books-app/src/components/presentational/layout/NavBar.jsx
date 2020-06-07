import React, { Component } from 'react';
import Login from '../../container/auth/Login';
import Register from '../../container/auth/Register';
import cover from '../../../assets/cover.png';
import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <img id="logo" src={cover} width="10%" />
                        <form className="form-inline">
                            <Login props={this.props} />
                            <Register props={this.props} />
                        </form>
                </nav>
            </div>
        );
    }
}

export default NavBar;