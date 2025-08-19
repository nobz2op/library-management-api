 BOOK-MANAGEMENT

A simple Node.js + Express REST API for managing books and users in a library.
This project demonstrates CRUD operations, user management, and basic transaction handling (issue/return books).

 Features

Add new books with details (title, author, pages, price, availability).

View all books in the library.

Edit/update book details.

Delete books from the library.

Issue a book (mark unavailable).

Return a book (mark available again).

Manage users (basic add/view/update/delete).

 Tech Stack

Node.js (Runtime)

Express.js (Web framework)

In-memory Data Store (Books & Users stored in arrays — no DB used yet)

 Project Structure
BOOK-MANAGEMENT/
│── controllers/
│   ├── bookController.js
│   └── userController.js
│── models/
│   ├── bookModel.js
│   └── userModel.js
│── routes/
│   ├── bookRoutes.js
│   └── userRoutes.js
│── server.js
└── package.json

 Installation & Setup

Clone the repository and install dependencies:

git clone https://github.com/nobz2op/BOOK-MANAGEMENT.git
cd BOOK-MANAGEMENT
npm install


Start the server:

node server.js


Server runs at:

http://localhost:3000

 API Endpoints
 Books
 Add Book

POST /books

{
  "name": "The Alchemist",
  "author": "Paulo Coelho",
  "pages": 197,
  "price": 350
}

 Get All Books

GET /books

 Edit Book

PUT /books/:id

 Delete Book

DELETE /books/:id

 Issue Book

PUT /books/:id/issue

 Return Book

PUT /books/:id/return

 Users
 Add User

POST /users

{
  "name": "Noble",
  "email": "noble@example.com"
}

 Get All Users

GET /users

 Notes

Uses in-memory storage (data resets when the server restarts).

Can be extended with MongoDB / MySQL for persistence.

Built as a learning project to demonstrate Node.js, Express, MVC structure, and REST API basics.