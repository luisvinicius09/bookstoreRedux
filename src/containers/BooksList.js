import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <td>Book ID</td>
          <td>Title</td>
          <td>Category</td>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        )) }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (s) => ({
  books: s.books,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
