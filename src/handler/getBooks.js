const books = require('../books');

const getBooks = (request) => {
  const result = (data) => {
    const { name, reading, finished } = request.query;
    let booksBackup = [...data];

    if (name) {
      const searchTerm = name.toLowerCase();
      booksBackup = booksBackup.filter((book) => book.name.toLowerCase().includes(searchTerm));
    }

    if (reading !== undefined) {
      const isReading = reading === '1';
      booksBackup = booksBackup.filter((book) => book.reading === isReading);
    }

    if (finished !== undefined) {
      const isFinished = finished === '1';
      booksBackup = booksBackup.filter(
        (book) => book.finished === isFinished,
      );
    }
    return booksBackup;
  };

  const filteredBooks = result(books).map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  }));

  return {
    status: 'success',
    data: {
      books: filteredBooks,
    },
  };
};

module.exports = getBooks;
