const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { getAllCategories, getFlashcardsByCategory } = require('../database');

const userRouter = express.Router();

// Fetch all categories
userRouter.get('/all-categories', expressAsyncHandler(async (req, res) => {
    const categories = await getAllCategories();
    res.json(categories);
}));

// Fetch flashcards by category
userRouter.get('/category/:categoryPath', expressAsyncHandler(async (req, res) => {
    const { categoryPath } = req.params;
    const flashcards = await getFlashcardsByCategory(categoryPath);
    res.json(flashcards);
}));

module.exports = userRouter;
