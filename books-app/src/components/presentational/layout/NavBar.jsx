import React, { Component } from 'react';
import Login from '../../container/auth/Login';
import Register from '../../container/auth/Register';
import cover from '../../../assets/cover.png';
import './NavBar.scss';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar transparent navbar-light bg-light">
                    <img id="logo" src={cover} width="10%" />
                        <div class="d-flex bd-highlight">
                            <div class="p-2 bd-highlight">
                                TESTIMONIALS
                            </div>
                            <div class="p-2 ml-3 mr-3 bd-highlight">
                                OUR LIBRARY
                            </div>
                            <div class="p-2 bd-highlight">
                                BEST SELLERS
                            </div>
                        </div>
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