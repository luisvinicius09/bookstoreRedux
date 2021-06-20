import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <>
    <div className="App">
      <div className="container">
        <BooksForm />
        <BooksList />
      </div>
    </div>
  </>
);

export default App;
