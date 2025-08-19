let books = [];
let nextId = 1;


function getAllBooks() {
  return books;
}  





function addBook(bookData) {
  const newBook = {
    id: nextId++,
    name: bookData.name,
    author: bookData.author,
    pages: bookData.pages,
    price: bookData.price,
    available: true, 
  };
  books.push(newBook);
  return newBook;
}





function findBookById(id) {
  return books.find((b) => b.id === id);
}





function updateBook(id, updates) {
  const book = findBookById(id);
  if (!book) return null;

  if (updates.name) book.name = updates.name;
  if (updates.author) book.author = updates.author;
  if (updates.pages) book.pages = updates.pages;
  if (updates.price) book.price = updates.price;

  return book;
}





function deleteBook(id) {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
}




module.exports = {
  getAllBooks,
  addBook,
  findBookById,
  updateBook,
  deleteBook,
};
