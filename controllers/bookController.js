const Book = require("../models/bookModel");

// ADD Book
async function addBook(req, res) {
  try {
    const { id, name, author, pages, price } = req.body;

    if (!id || !name || !author || !pages || !price) {
      return res.status(400).json({ message: "All fields including id are required" });
    }

    const existingBook = await Book.findById(id);
    if (existingBook) {
      return res.status(409).json({ message: "Book with this ID already exists" });
    }

    const newBook = await Book.create({ _id: id, name, author, pages, price, available: true });
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error: error.message });
  }
}





// Get All Books
async function getBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
}





// Update Book
async function updateBook(req, res) {
  try {
    const bookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error: error.message });
  }
}




// Delete Book
async function deleteBook(req, res) {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error: error.message });
  }
}






// Issue Book
async function issueBook(req, res) {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    if (!book.available) {
      return res.status(400).json({ message: "Book already issued" });
    }

    book.available = false;
    await book.save();

    res.json({ message: "Book issued successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error issuing book", error: error.message });
  }
}





// Return Book
async function returnBook(req, res) {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    if (book.available) {
      return res.status(400).json({ message: "Book already in library" });
    }

    book.available = true;
    await book.save();

    res.json({ message: "Book returned successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error returning book", error: error.message });
  }
}

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
  issueBook,
  returnBook,
};
