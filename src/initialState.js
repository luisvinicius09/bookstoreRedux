const generateId = () => Math.floor((Math.random() * 100) + 1);

export default {
  books: [
    {
      id: generateId(),
      title: 'Harry Potter',
      category: 'Action',
    },
    {
      id: generateId(),
      title: 'Matrix',
      category: 'Action',
    },
    {
      id: generateId(),
      title: 'Book Example',
      category: 'Learning',
    },
  ],
};
