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
                <a>Community</a>
                <NewBook />
                <div class="form-group">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control fas fa-search" placeholder="Search"/>
                </div>
                <form className="form-inline">
                    <button type="button" className="btn btn-outline-warning font-weight-bold" data-toggle="modal" data-target="#exampleModal1">
                        <Link to="/home" onClick={e=> localStorage.removeItem('token')}>LOGOUT</Link>
                    </button>
                </form>
            </nav>
            <div class="container">
                <div class="row p-4">
                    <div class="col-md">
                        <div class="card">
                            <div class="card-img-right">
                                <img class="" src={Brothers} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                Alexey Fyodorovitch Karamazov was the third son of Fyodor Pavlovitch Karamazov, 
                                a land owner well known in our district in his own day, and still remembered among us owing to his gloomy and tragic death.                            
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
                        <div class="card">
                            <div class="img-square-wrapper">
                                <img class="" src={thinking} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                This program looks like it should produce null, but it actually pro- duces a new object, 
                                because the named function expression inherits Object.prototype.constructor (i.e., the Object constructor function) in its scope. 
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
                        <div class="card">
                            <div class="img-square-wrapper">
                                <img class="" src={python} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                    Looking for a powerful yet easy-to-read programming language? Then slither up to Python! 
                                    This friendly reference introduces you to Python, the portable, interactive language that combines great power with clear syntax.
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
                        <div class="card">
                            <div class="img-square-wrapper">
                                <img class="" src={subtle} width="100%" alt="Card image cap"/>
                            </div>
                            <div class="card-body">
                                <p className="snack-content">
                                The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life is the second book by blogger and author Mark Manson.
                                In it Manson argues that life's struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful.                                
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
                        <div class="card">
                            <div class="img-square-wrapper">
                                <img class="" src={wow} width="100%" alt="Card image cap"/>
                            </div>
                            <h2 className="card-title">The Theory of Everything</h2>
                            <div class="card-body">
                                <p className="snack-content">
                                A Brief History of Time, he presented us with a bold new look at our universe, how it began, and how our old views of physics and tired theories about the creation of the universe were no longer relevant.
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
                        <div class="card">
                            <div class="img-square-wrapper">
                                <img class="" src={blackhole} width="100%" alt="Card image cap"/>
                            </div>
                            <h2 className="card-title">The Ruby on Rails Tutorial</h2>
                            <div class="card-body">
                                <p className="snack-content">
                                Since its initial publication in 2010, the Ruby on Rails Tutorial has been one of the leading introductions to web development. 
                                In this bestselling tutorial, you’ll learn how to develop and deploy real, industrial-strength web applications with Ruby on Rails.
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