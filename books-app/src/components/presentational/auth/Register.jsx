import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

function RegistrationPage({props, submit, change}) {
    return (
      <>
          <button type="button" className="btn btn-outline-warning font-weight-bold" data-toggle="modal" data-target="#exampleModal1">
              SIGNUP
          </button>
          <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm">
                      <div className="card mx-auto card-default align-item-center justify-content-center">
                      <div className="card-body">
                      <h5 className="card-title text-center">Create an account</h5>
                      <form noValidate onSubmit={submit}>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">First Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="firstname"
                            name="firstname"
                            autoComplete="on"
                            placeholder="Enter First Name"
                            onChange={change}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Last Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="lastname"
                            name="lastname"
                            autoComplete="on"
                            placeholder="Enter Last Name"
                            onChange={change}
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
                            onChange={change}
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
                            placeholder="At least 6 characters"
                            onChange={change}
                          />
                        </div>
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" htmlFor="exampleCheck1">By submiting, you agree to the <a href="#">Terms and Conditions</a> here.</label>
                        </div>
                        <button type="submit" className="btn btn-warning font-weight-bold">SIGN UP</button>
                      </form>
                      </div>
                      </div>
                      </div>
                      <div class="col-sm">
                        Download files
                          Download your logo and your social media brand assets for free.

                          Save multiple logos
                          Create and save multiple logo templates.

                          Unlimited editing
                          Full editing and unlimited revisions for all logos, forever.
                      </div>
                    </div>
                  </div>
                    
                </div>
            </div>
        </div>
      </> 
    )
}

export default RegistrationPage;