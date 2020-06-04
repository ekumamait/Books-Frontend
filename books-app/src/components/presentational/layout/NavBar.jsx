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
                        {/* <div class="d-flex justify-content-start bd-highlight">
                            <div class="p-2 bd-highlight">
                                Testimonials 
                            </div>
                            <div class="p-2 ml-0 mr-0 bd-highlight">
                                Our Library 
                            </div>
                            <div class="p-2 bd-highlight">
                                Best Sellers
                            </div>
                        </div> */}
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