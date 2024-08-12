import React, { useEffect, useState } from "react";
import AdminFlashcardGrid from "../../components/admin flashcard grid/AdminFlashcardGrid";
import "./AdminEditOrDeleteCards.css";
import axios from "axios";
import Loader from "../../components/loader/Loader";
function AdminEditOrDeleteCards() {
  let token = sessionStorage.getItem("token");
  const axiosWithToken = axios.create({
    headers: { authorization: `Bearer ${token}` },
  });

  const [flashcards, setFlashcards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getFlashCards(params) {
    setIsLoading(true);
    let res = await axiosWithToken.get("http://localhost:5000/admin/flashcards");
    console.log(res.data);
    setFlashcards(res.data.payload);
    setIsLoading(false);
    console.log(isLoading)
  }

  const handleEdit = (id) => {
    console.log("Edit flashcard with ID:", id);
    // Implement edit functionality
  };

  function deleteObjectById(array, id) {
    return array.filter(item => item.id !== id);
  }

  const handleDelete = async(id) => {
    // Implement delete functionality
    let res = await axiosWithToken.delete(`http://localhost:5000/admin/delete-flashcard/${id}`)
    if(res.data.message==='Flashcard deleted successfully'){
      alert('Card deleted succesfully!')
      setFlashcards(deleteObjectById(flashcards,id))
    }
  };

  useEffect(() => {
    getFlashCards();
  },[]);
  return (
    <div className="admin-page-add-delete-cards">
      {isLoading === true ? (
        <div className="page-loader">
          <Loader/>
        </div> 
      ) : (
        <AdminFlashcardGrid flashcards={flashcards} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
}

export default AdminEditOrDeleteCards;
