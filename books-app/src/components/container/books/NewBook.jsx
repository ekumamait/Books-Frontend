import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../../actions/BooksActions';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { SUCCESS, ERROR, WARNING } from '../../../constants/ActionTypes';
import NewBook from '../../presentational/books/NewBook';

export class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      image: '',
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.notify = this.notify.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
    if (newProps.success) {
      this.notify(SUCCESS, 'Article saved');
      //redirect
      let { history } = this.props;
      history.push('/articles');
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditor(e) {
    this.setState({ body: e });
  }

  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: this.state.title,
      description: this.state.description,
      body: this.state.body
    };
    this.props.addArticle(payload);
  }

  notify(type, message) {
    switch (type) {
      case SUCCESS:
        toast.info(message);
        break;
      case WARNING:
        toast.warning(message);
        break;
    }
  }

  render() {
    return (
      <NewBook
        handleEditor={this.handleEditor}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        notify={this.notify}
      />
    );
  }
}

Books.propTypes = {
  addBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  errors: PropTypes.object,
  success: PropTypes.object
};

const mapStateToProps = state => {
  return {
    article: state,
    errors: state.errors,
    success: state.success
  };
};

export default connect(
  mapStateToProps,
  { addBook }
)(Books);
