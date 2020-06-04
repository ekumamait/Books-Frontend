import React from 'react'
import { Link } from 'react-router-dom';
import './Register.scss';

function LoginPage({props, submit, change, notify}) {
    return (
    <div>
            <button type="button" className="btn btn-light text-warning font-weight-bold" data-toggle="modal" data-target="#exampleModal">
            LOGIN
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered login-modal">
                <div className="modal-content">
                <div className="container">
                <div className="row">
                <div className="col-sm left">
                    <div className="d-flex justify-content-between">
                        <div className="p-2">
                            <h3 className="card-title text-center justify-content-center">Welcome Back!</h3>
                        </div>
                        <div className="p-2">
                            <button type="button" className="close align-text-bottom" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    {/* <p>Login to continue from where you left off.</p> */}
                    <div className="container-sm">
                    <form noValidate onSubmit={submit}>
                            <div>
                                <div className="form-group ">
                                    <label >Email Address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="email"
                                        name="email"
                                        autoComplete="on"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email"
                                        onChange={change}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password"
                                    name="password"
                                    autoComplete="on"
                                    placeholder="Enter password"
                                    onChange={change}
                                    />
                                </div>
                            </div>
                            <h6 className="text-sm-left">
                                Have no account? sign up <Link to="/register">here</Link>
                            </h6>
                            <div className="d-flex justify-content-end">
                                <div className="p-2">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                <div className="p-2">
                                    <button type="submit" id="signinButton" name="submit" value="Sign In" className="btn btn-warning font-weight-bold">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LoginPage;