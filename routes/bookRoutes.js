const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const authenticateToken = require("../middleware/authMiddleware");

// Protect all book routes



router.use(authenticateToken);

router.post("/", bookController.addBook);
router.get("/", bookController.getBooks);
router.put("/:id", bookController.updateBook);
router.delete("/:id", bookController.deleteBook);
router.post("/issue/:id", bookController.issueBook);
router.post("/return/:id", bookController.returnBook);

module.exports = router;
