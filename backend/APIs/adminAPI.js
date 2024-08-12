const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const {
  getAllCategories,
  addFlashcard,
  editFlashcard,
  deleteFlashcard,
  findAdminByUsername,
  getAllFlashcardsWithCategory,
} = require("../database");
const verifyToken = require("../Middlewares/VerifyToken");

const adminRouter = express.Router();

// Fetch all flashcards with their category names
adminRouter.get(
  "/flashcards",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    const flashcards = await getAllFlashcardsWithCategory();
    res.send({message:"all cards",payload:flashcards});
  })
);

// Fetch all categories (public API)
adminRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await getAllCategories();
    res.json(categories);
  })
);

// Add a new flashcard (protected route)
adminRouter.post(
  "/add-flashcard",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const { question, answer, category, categoryPath } = req.body;
    // console.log(question,+" "+answer+" "+categoryName+" "+categoryPath)
    const flashcardId = await addFlashcard(question, answer, category, categoryPath);
    console.log(flashcardId)
    res
      .status(201)
      .json({ status: "success", message: "Flashcard added successfully", payload: flashcardId });
  })
);

// Edit a flashcard by ID (protected route)
adminRouter.put(
  "/edit-flashcard/:id",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { question, answer, categoryName } = req.body;
    const rowsAffected = await editFlashcard(id, question, answer, categoryName);
    if (rowsAffected > 0) {
      res.json({ message: "Flashcard updated successfully" });
    } else {
      res.status(404).json({ message: "Flashcard not found" });
    }
  })
);

// Delete a flashcard by ID (protected route)
adminRouter.delete(
  "/delete-flashcard/:id",
  verifyToken,
  expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const rowsAffected = await deleteFlashcard(id);
    if (rowsAffected > 0) {
      res.send({ statusCode:53, message: "Flashcard deleted successfully" });
    } else {
      res.status(404).json({ message: "Flashcard not found" });
    }
  })
);

// Admin Login API
adminRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // Use the function from database.js to find the admin by username
    const adminRows = await findAdminByUsername(username);

    if (adminRows.length === 0) {
      return res.send({ message: "Invalid Username!", statusCode: 50 });
    }

    const admin = adminRows[0];

    // Check if the password matches
    const passwordMatch = await bcryptjs.compare(password, admin.password);

    if (!passwordMatch) {
      return res.send({ message: "Invalid Username or Password!", statusCode: 51 });
    }

    // Generate JWT token
    const token = jwt.sign({ username: admin.username }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Return the token to the client
    res.send({ message: "Login Succesful", statusCode: 200, token: token });
  })
);

module.exports = adminRouter;
