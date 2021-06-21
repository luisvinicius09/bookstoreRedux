import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index'; // eslint-disable-line
import CategoryFilter from '../components/CategoryFilter'; // eslint-disable-line
import logo from '../assets/logo.svg';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    const s = this.props;
    const bookIndex = (s.books).findIndex((x) => x === book);
    removeBook(bookIndex);
  }

  render() {
    const { books, filter } = this.props;
    const filteredBooks = (filter !== 'All') ? books.filter((book) => book.category === filter) : books;
    return (
      <div className="book-container">
        <header>
          <div className="title">
            <h1>
              BookStore JS
              <span className="books">Books</span>
            </h1>
            <div className="categories">
              <CategoryFilter handleChange={this.handleFilterChange} />
            </div>
          </div>
          <div className="imgHeader">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </header>

        <div className="main">
          <div className="book-section">
            {filteredBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (s) => ({
  books: s.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
