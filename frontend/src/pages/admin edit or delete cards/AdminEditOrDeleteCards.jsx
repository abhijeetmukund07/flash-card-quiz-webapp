import React, { useState } from "react";
import AdminFlashcardGrid from "../../components/admin flashcard grid/AdminFlashcardGrid";
import "./AdminEditOrDeleteCards.css";
function AdminEditOrDeleteCards() {

  const [flashcards, setFlashcards] = useState([
    //dummy data to simulate
    { id: 1, 
      category: "Algorithms", 
      question: "What is BFS?", 
      answer: "Breadth First Search" 
    },
    {
      id: 2,
      category: "Data Structures",
      question: "What is a Stack?",
      answer: "LIFO data structure",
    },
    { id: 3, 
        category: "Algorithms", 
        question: "What is BFS?", 
        answer: "Breadth First Search" 
      },
      {
        id: 4,
        category: "Data Structures",
        question: "What is a Stack?",
        answer: "LIFO data structure",
      },{ id: 5, 
        category: "Algorithms", 
        question: "What is BFS?", 
        answer: "Breadth First Search" 
      },
      {
        id: 6,
        category: "Data Structures",
        question: "What is a Stack?",
        answer: "LIFO data structure",
      },
    // Add more cards as needed
  ]);

  const handleEdit = (id) => {
    console.log("Edit flashcard with ID:", id);
    // Implement edit functionality
  };

  const handleDelete = (id) => {
    console.log("Delete flashcard with ID:", id);
    // Implement delete functionality
  };
  return (
    <div className="admin-page-add-delete-cards">
      <AdminFlashcardGrid flashcards={flashcards} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default AdminEditOrDeleteCards;
