const addBook = require('./handler/addBook');
const getBook = require('./handler/getBook');
const getBooks = require('./handler/getBooks');
const updateBook = require('./handler/updateBook');
const deleteBook = require('./handler/deleteBook');

const routes = [
  // TODO: test
  {
    method: 'GET',
    path: '/',
    handler: () => ({ message: 'Hello World' }),
  },

  // TODO: add book
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },

  // TODO:  get all books
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },

  // TODO: get detail book
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBook,
  },

  // TODO: update book
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBook,
  },

  // TODO: delete book
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBook,
  },
];

module.exports = routes;
