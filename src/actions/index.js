export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE BOOK';

const CREATE_BOOK = (book) => ({
  type: CREATE_BOOK,
  book,
});

const REMOVE_BOOK = (book) => ({
  type: REMOVE_BOOK,
  book,
});
