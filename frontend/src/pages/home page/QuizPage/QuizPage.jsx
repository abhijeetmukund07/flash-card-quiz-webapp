import React from "react";
import CardCarousel from "../../../components/card carousel/CardCarousel";
import "./QuizPage.css";
function QuizPage() {
  return (
    <div className="quiz-page">
      <CardCarousel />
    </div>
  );
}

export default QuizPage;

/*In this page, we take the categoty and then find the fetch the cards data from db, 
store them in an array and pass it to carousel component*/