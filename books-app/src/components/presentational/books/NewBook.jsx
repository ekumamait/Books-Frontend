import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import Modules from '../../../constants/ActionTypes';

export class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#addBookModal">
                <i className="fa fa-plus"></i>
            </button>
            <div className="modal fade" id="addBookModal" tabIndex="-1" role="dialog" aria-labelledby="addBookModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <section id="dashboard-page" className="flex-grow-1">
                            <section id="featured-new-article" className="mt-5 mb-2">
                            <div className="container">
                                <div className="row">
                                <div className="col-md-10 m-auto">
                                    <div className="card">
                                    <div className="card-header text-center text-primary">
                                        Post New Book
                                    </div>
                                    <div className="card-body">
                                        <form noValidate onSubmit={this.props.handleSubmit}>
                                        <div className="form-group">
                                            <textarea
                                            className="form-control form-control-lg"
                                            placeholder="Add Title"
                                            name="title"
                                            onChange={this.props.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                            className="form-control form-control-lg"
                                            placeholder="Add Author's Name"
                                            name="description"
                                            onChange={this.props.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <ReactQuill
                                            theme={'snow'}
                                            modules={Modules}
                                            onChange={this.props.handleEditor}
                                            name="body"
                                            placeholder="Book Image"
                                            />
                                        </div>
                                        <button
                                            Link
                                            to="/books"
                                            type="submit"
                                            className="btn btn-dark"
                                        >
                                            Save
                                        </button>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

NewBook.propTypes = {
  handleEditor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default connect()(NewBook);