import React from "react";
import FlashCard from "../flash card/FlashCard";

function CardCarousel() {
  let frontTestText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquid ipsum, facere laborum facilis molestiae alias. Sit, ullam odio nam illum eaque nulla voluptas molestiae fugit mollitia magni, asperiores autem?";
  let backTestText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, excepturi numquam dolorem sed expedita quibusdam facere dolores molestias odit ratione nulla cum sit! Repellat quia architecto ullam illum, fugiat aspernatur? Ut quidem voluptatum consequuntur, quae deserunt ducimus rerum quam ipsam laborum ipsum nobis hic suscipit quos laboriosam velit impedit facilis nam quia eos possimus dolores? Dolores tenetur quod quo dolorem!";
  return (
    <div>
      <FlashCard front={frontTestText} back={backTestText} />
    </div>
  );
}

export default CardCarousel;
