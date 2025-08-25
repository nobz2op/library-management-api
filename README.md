# Book Management API

A secure RESTful API built with Node.js, Express, and MongoDB to manage books and users, protected by JWT authentication.

---

## Features

- JWT-based authentication securing all routes
- CRUD operations for books and users using custom string IDs
- Issue and return management for books
- Input validation and error handling

---

## Technologies

- Node.js & Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- dotenv for environment variables

---

## Getting Started

### Setup

1. Clone the repo and install dependencies:

npm install

text

2. Configure environment variables in a `.env` file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/book_management
JWT_SECRET=your_secret_key

text

3. Ensure MongoDB is running locally.

4. Generate a JWT token for testing:

node generateToken.js

text

5. Run the server:

node server.js

text

---

## API Usage

Include the JWT access token in every request header:  
Authorization: Bearer <your_token>

text

### Books Endpoints

| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| POST   | `/api/books`            | Create a new book           |
| GET    | `/api/books`            | Get all books               |
| PUT    | `/api/books/:id`        | Update a book by its ID     |
| DELETE | `/api/books/:id`        | Delete a book by its ID     |
| POST   | `/api/books/issue/:id`  | Issue a book                |
| POST   | `/api/books/return/:id` | Return a book               |

### Users Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | `/api/users`        | Create a new user       |
| GET    | `/api/users`        | Get all users           |
| PUT    | `/api/users/:id`    | Update a user by ID     |
| DELETE | `/api/users/:id`    | Delete a user by ID     |

---

## Example Request Formats

### Adding or Updating Books

{
"id": "your_unique_book_id",
"name": "Book Title",
"author": "Author Name",
"pages": 123,
"price": 99
}

text

### Adding or Updating Users

{
"id": "your_unique_user_id",
"name": "User Name",
"email": "user@example.com"
}

text

---

## Notes

- Use custom string IDs for both books and users.
- Do **not** include body in GET or DELETE requests.
- Always supply the valid JWT token in the `Authorization` header.
- Issue and return endpoints require only an empty POST request.

---

## Testing Tips

- Generate your token with `node generateToken.js`.
- Use Postman or curl with the bearer token set.
- For example, a GET books request with curl:

curl -H "Authorization: Bearer <your_token>" http://localhost:5000/api/books

text

---

## License

MIT License

---

Feel free to adjust data and IDs as you like for your testing and usage.