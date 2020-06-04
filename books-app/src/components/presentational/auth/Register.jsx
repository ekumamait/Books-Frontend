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
        <div className="modal-dialog modal-dialog-centered register-modal">
          <div className="modal-content">
            <div className="container">
              <div className="row">
                <div className="col-sm left">
                  <div className="card register-card mx-auto card-default align-item-center justify-content-center">
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
                        <div className="checker">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <small className="form-text text-muted" htmlFor="exampleCheck1">By submiting, you agree to the <a href="#">Terms and Conditions</a> here.</small>
                        </div>
                        <button type="submit" className="btn btn-warning font-weight-bold">SIGN UP</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm right">
                  <div className="intro-body">
                    <h5>Download files</h5>
                    <p>Download your logo and your social media brand assets for free.</p>

                    <h5>Save multiple logos</h5>
                    <p>Create and save multiple logo templates.</p>

                    <h5>Unlimited editing</h5>
                    <p>Full editing and unlimited revisions for all logos, forever.</p>
                  </div>
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