const BookModel = require("../models/bookModel");

// ADD Book

function addBook(req, res) {
  const { name, author, pages, price } = req.body;

  if (!name || !author || !pages || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBook = BookModel.addBook({ name, author, pages, price });
  res.status(201).json({ message: "Book added successfully", book: newBook });
}




//Get books
function getBooks(req, res) {
  const books = BookModel.getAllBooks();
  res.json(books);
}




//Update book

function updateBook(req, res) {
  const bookId = parseInt(req.params.id);
  const updated = BookModel.updateBook(bookId, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book updated successfully", book: updated });
}





//Delete book
function deleteBook(req, res) {
  const bookId = parseInt(req.params.id);
  const deleted = BookModel.deleteBook(bookId);

  if (!deleted) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json({ message: "Book deleted successfully" });
}




// Issue book
function issueBook(req, res) {
  const bookId = parseInt(req.params.id);
  const book = BookModel.findBookById(bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (!book.available) {
    return res.status(400).json({ message: "Book already issued" });
  }

  book.available = false;
  res.json({ message: "Book issued successfully", book });
}




//Return book
function returnBook(req, res) {
  const bookId = parseInt(req.params.id);
  const book = BookModel.findBookById(bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (book.available) {
    return res.status(400).json({ message: "Book already in library" });
  }

  book.available = true;
  res.json({ message: "Book returned successfully", book });
}

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  issueBook,
  returnBook,
};
