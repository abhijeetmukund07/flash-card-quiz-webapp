const mysql = require("mysql2/promise");
require('dotenv').config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT,
  queueLimit: 0,
});

// Public API Functions

// 1. Get all categories
async function getAllCategories() {
  const [rows] = await pool.query("SELECT * FROM categories");
  return rows;
}

// 2. Fetch all flashcards by category
async function getFlashcardsByCategory(categoryPath) {
  const query = `
        SELECT flashcards.id, flashcards.question, flashcards.answer, categories.name AS category 
        FROM flashcards 
        JOIN categories ON flashcards.category_id = categories.id 
        WHERE categories.path = ?
    `;
  const [rows] = await pool.query(query, [categoryPath]);
  return rows;
}

// Admin API Functions

// 1. Add a new flashcard
async function addFlashcard(question, answer, categoryName) {
  let categoryId;
  let categoryRow;
  console.log('in database.js',categoryName)
  categoryPath = `${categoryName.toLowerCase().replace(/\s+/g, '-')}`;

  // Check if the category exists
  [categoryRow] = await pool.query("SELECT id, path FROM categories WHERE name = ?", [
    categoryName,
  ]);
  categoryId = categoryRow[0]?.id;

  // If the category doesn't exist, create it
  if (!categoryId) {
    const [result] = await pool.query("INSERT INTO categories (name, path) VALUES (?, ?)", [
      categoryName,
      categoryPath,
    ]);
    categoryId = result.insertId;
  }

  // Insert the flashcard with the categoryId
  const query = "INSERT INTO flashcards (question, answer, category_id) VALUES (?, ?, ?)";
  const [result] = await pool.query(query, [question, answer, categoryId]);

  return result.insertId;
}

// 2. Edit a flashcard by ID
// async function editFlashcard(id, question, answer, categoryName) {
//   let categoryId;

//   if (categoryName !== "other") {
//     const [categoryRows] = await pool.query("SELECT id FROM categories WHERE name = ?", [
//       categoryName,
//     ]);
//     categoryId = categoryRows[0]?.id;

//     if (!categoryId) {
//       const [result] = await pool.query("INSERT INTO categories (name) VALUES (?)", [categoryName]);
//       categoryId = result.insertId;
//     }
//   }

//   const query = "UPDATE flashcards SET question = ?, answer = ?, category_id = ? WHERE id = ?";
//   const [result] = await pool.query(query, [question, answer, categoryId, id]);
//   return result.affectedRows;
// }
async function editFlashcard(id, question, answer, categoryName) {
  let categoryId;
  let categoryPath;

  if (categoryName !== "other") {
      const [categoryRows] = await pool.query("SELECT id, path FROM categories WHERE name = ?", [
          categoryName,
      ]);
      categoryId = categoryRows[0]?.id;
      categoryPath = categoryRows[0]?.path;

      if (!categoryId) {
          // Generate a path for the new category
          categoryPath = `${categoryName.toLowerCase().replace(/\s+/g, '-')}`;

          const [result] = await pool.query(
              "INSERT INTO categories (name, path) VALUES (?, ?)", 
              [categoryName, categoryPath]
          );
          categoryId = result.insertId;
      }
  }

  const query = "UPDATE flashcards SET question = ?, answer = ?, category_id = ? WHERE id = ?";
  const [result] = await pool.query(query, [question, answer, categoryId, id]);
  return result.affectedRows;
}


// 3. Delete a flashcard by ID
async function deleteFlashcard(id) {
  const query = "DELETE FROM flashcards WHERE id = ?";
  const [result] = await pool.query(query, [id]);
  return result.affectedRows;
}

// 4. Find an admin by username
async function findAdminByUsername(username) {
    const [rows] = await pool.query('SELECT * FROM admins WHERE username = ?', [username]);
    return rows;
}

//5. fetch all flashcards along with category name:
// Get all flashcards with their category names
async function getAllFlashcardsWithCategory() {
  const query = `
      SELECT flashcards.id, flashcards.question, flashcards.answer, categories.name AS category 
      FROM flashcards 
      JOIN categories ON flashcards.category_id = categories.id
  `;
  const [rows] = await pool.query(query);
  return rows;
}



module.exports = {
  getAllCategories,
  getFlashcardsByCategory,
  addFlashcard,
  editFlashcard,
  deleteFlashcard,
  findAdminByUsername,
  getAllFlashcardsWithCategory
};



//testing functions here:
// async function testAddFlashCard() {
//     let insertedId = await addFlashcard("Sorting Algos?", "QS,MS,BS,SS", "other",'/other');
//     console.log(insertedId);
// }

// testAddFlashCard()


// async function testDeleteFlashCard(id) {
//     let affected_rows = await deleteFlashcard(id)
//     console.log(affected_rows)
// }

// testDeleteFlashCard(3)

// async function testGetCardsByCategory(categoryPath) {
//     let flashCards = await getFlashcardsByCategory(categoryPath)
//     console.log(flashCards)
// }

// testGetCardsByCategory('/dsa')