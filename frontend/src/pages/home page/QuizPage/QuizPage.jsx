import React, { act } from "react";
// import CardCarousel from "../../../components/card carousel/CardCarousel";
import FlashCard from "../../../components/flash card/FlashCard";
import "./QuizPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function QuizPage() {
  // dummy data
  class cards {
    constructor(id, question, answer, categoryid) {
      this.id = id;
      this.question = question;
      this.answer = answer;
      this.categoryid = categoryid;
    }
  }
  let cardsList = [
    new cards(1, "Search Algos?", "LS and BS", 1),
    new cards(2, "Sort Algos", "BS,SS,QS,MS", 1),
    new cards(3, "Best Sort Algo", "Quick SOrt", 1),
    new cards(4, "Search Algos?", "LS and BS", 1),
    new cards(5, "Sort Algos", "BS,SS,QS,MS", 1),
    new cards(6, "Best Sort Algo", "Quick SOrt", 1),
    new cards(7, "Search Algos?", "LS and BS", 1),
    new cards(8, "Sort Algos", "BS,SS,QS,MS", 1),
    new cards(9, "Best Sort Algo", "Quick SOrt", 1),
  ];
  //above is dummy data

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#414042" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style,display:"block", background: "#414042", }} onClick={onClick} />
    );
  }

  const settings = {
    dots: true,
    // className: "center",
    // centerMode: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="quiz-page   mx-auto">
      <div className="w-25 mx-auto">
        <Slider {...settings}>
          {cardsList.map((card, index) => {
            return <FlashCard key={card.id} front={card.question} back={card.answer} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default QuizPage;

/*In this page, we take the categoty and then find the fetch the cards data from db, 
store them in an array and pass it to carousel component*/

// <div className="quiz-page">
//   <div className="slider">
//     {cardsList.map((card, index) => {
//       return <FlashCard key={card.id} front={card.question} back={card.answer} />;
//     })}

//     {/* <FlashCard front={frontTestText} back={backTestText} /> */}

//     <button id="next">&gt;</button>
//     <button id="prev">&lt;</button>
//   </div>
// </div>

// return (
//   <div className="quiz-page">
//     {/* <CardCarousel cardsList= {cardsList} /> */}
//     <div className="slider">
//       {cardsList.map((card, index) => {
//         return <FlashCard key={card.id} front={card.question} back={card.answer} />;
//       })}

//       {/* <button id="next">&gt;</button>
//     <button id="prev">&lt;</button> */}

//       {/* <FlashCard front={frontTestText} back={backTestText} /> */}
//     </div>
//     <button id="next">&gt;</button>
//     <button id="prev">&lt;</button>
//   </div>
// );
