import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { generateId } from '../initialState';
import { createBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: generateId(),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value });
    } else if (e.target.name === 'category') {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: generateId(),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <input name="title" placholder="Title" onChange={this.handleChange} value={title} />
        </label>
        <label htmlFor="category">
          Category
          <select onChange={this.handleChange} value={category}>
            {categories.map((c) => <option key={c} name={c}>{c}</option>)}
          </select>
        </label>
        <label htmlFor="submit">
          Submit
          <input type="submit" />
        </label>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
