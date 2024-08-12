import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./AdminFlashCard.css";

function AdminFlashCard({ category, question, answer, onEdit, onDelete }) {
  return (
    <div className="admin-flashcard">
      <div className="admin-flashcard-content">
        <h4 className="admin-flashcard-category">{category}</h4>
        <h3 className="admin-flashcard-question">{question}</h3>
        <p className="admin-flashcard-answer">{answer}</p>
      </div>
      <div className="admin-flashcard-overlay">
        <FaEdit className="icon edit-icon" onClick={onEdit} />
        <FaTrashAlt className="icon delete-icon" onClick={onDelete} />
      </div>
    </div>
  );
}

export default AdminFlashCard;
