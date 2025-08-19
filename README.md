 Library Management API

A simple Node.js + Express API for managing books and users in a library.  
This project was built as part of learning Node.js fundamentals and demonstrates basic CRUD operations and user management.

---

## Features
- Add new books with details (name, author, pages, price, availability).
- View all books in the library.
- Edit/update book details.
- Delete books from the library.
- Issue a book .
- Return a book .
- Manage users (basic add/view/update/delete).

---

## Tech Stack
- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **In-memory Data Store** (Books & Users are stored in arrays for now — no DB used)

---

##  Project Structure
library-management-api/
│── controllers/
│ ├── bookController.js
│ └── userController.js
│── models/
│ ├── bookModel.js
│ └── userModel.js
│── routes/
│ ├── bookRoutes.js
│ └── userRoutes.js
│── server.js
└── package.json

yaml
Copy
Edit

---

## Installation & Setup
Clone the repository and install dependencies:

```bash
git clone https://github.com/nobz2op/library-management-api.git
cd library-management-api
npm install
Start the server:

bash
Copy
Edit
node server.js
Server runs on:

arduino
Copy
Edit
http://localhost:3000
 API Endpoints
Books 
Add Book
POST /books

json
Copy
Edit
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

json
Copy
Edit
{
  "name": "Noble",
  "email": "noble@example.com"
}
Get All Users
GET /users

