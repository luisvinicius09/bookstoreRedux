const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <form>
    <label htmlFor="title">
      Title
      <input name="title" placholder="Title" />
    </label>
    <label htmlFor="category">
      Category
      <select>
        {categories.map((c) => <option key={c} name={c}>{c}</option>)}
      </select>
    </label>
    <label htmlFor="submit">
      Submit
      <input type="submit" />
    </label>
  </form>
);

export default BooksForm;
