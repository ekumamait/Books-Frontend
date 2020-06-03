import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage({props}) {
    return (
        <div className="container">
        <div className="card mx-auto card-default align-item-center justify-content-center" style={{width: "500px"}}>
          <div className="card-body">
          <h5 className="card-title text-center">Have an account Log In <Link to="/">here</Link></h5>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">First Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="firstName"
                name="firstName"
                autoComplete="on"
                aria-describedby="emailHelp"
                placeholder="Enter first name"
                // value={this.state.password}
                // onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Last Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="lastName"
                name="lastName"
                autoComplete="on"
                aria-describedby="emailHelp"
                placeholder="Enter last name"
                // value={this.state.password}
                // onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email"
                name="email"
                autoComplete="on"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
                // value={this.state.email}
                // onChange={this.onChange}
              />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="on"
                placeholder="Confirm password"
                />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">By submiting, you agree to the <a href="#">Terms and Conditions</a> here.</label>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
          </form>
          </div>
        </div>
      </div>
    )
}

export default RegistrationPage;