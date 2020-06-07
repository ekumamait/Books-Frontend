import React from 'react';
import NavBar from '../layout/NavBar';
import { Link } from 'react-router-dom';
import cover from '../../../assets/cover.png';
import subtle from '../../../assets/subtle.png';
import Brothers from '../../../assets/Brothers.png';
import python from '../../../assets/python.png';
import thinking from '../../../assets/thinking.png';
import blackhole from '../../../assets/blackhole.JPG';
import wow from '../../../assets/wow.png';
import NewBook from '../../container/books/NewBook';

function Landing({props, clickEvent}) {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <img id="logo" src={cover} width="10%" />
                <div>
                    <input type="text" class="form-control" placeholder="Search by Title, Author"/>
                </div>
                <NewBook />
                <form className="form-inline">
                    <button type="button" className="btn btn-outline-warning font-weight-bold" data-toggle="modal" data-target="#exampleModal1">
                        <Link to="/home" onClick={e=> localStorage.removeItem('token')}>LOGOUT</Link>
                    </button>
                </form>
            </nav>
            <div class="container">
                <div class="row p-4">
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="card-img-right">
                                <img class="" src={Brothers} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                Fyodor Pavlovitch Karamazov
                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="img-square-wrapper">
                                <img class="" src={thinking} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                    Daniel Kahneman
                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="img-square-wrapper">
                                <img class="" src={python} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                    Stef Maruch
                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row p-2">
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="img-square-wrapper">
                                <img class="" src={subtle} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title">The Subtle Art of Not Giving A F*ck</h5>
                                <p className="snack-content">
                                    Mark Manson
                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="img-square-wrapper">
                                <img class="" src={wow} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h5 className="card-title">The Theory of Everything</h5>
                                <p className="snack-content">
                                    Stephen Hawking
                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card custom-elevation-z2">
                            <div class="img-square-wrapper">
                                <img class="" src={blackhole} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <h2 className="card-title">The Ruby on Rails Tutorial</h2>
                                <p className="snack-content">

                                </p>
                                <div class="d-flex bd-highlight mb-3">
                                    <div class="mr-auto p-2 bd-highlight">
                                        <a href="#" className="btn btn-outline-warning">Read More</a>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-warning font-weight-bold"><i class="fa fa-pencil"></i></button>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal"><i class="fa fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
}

export default Landing;

