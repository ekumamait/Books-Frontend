import React from 'react'
import { Link } from 'react-router-dom';

function LoginPage({props}) {
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
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            name="email"
                            autoComplete="on"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email"
                            // value={this.state.email}
                            // onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        autoComplete="on"
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
                        className="btn btn-warning">Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default LoginPage;