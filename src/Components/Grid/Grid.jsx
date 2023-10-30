import React, { useState } from "react";
import "./Grid.css";

export default () => {

  const cards = [
    {
      title: "ITEM 1",
      url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      price: "20",
      description: "3 colours available",
      rating: "4.5",
    },
    {
      title: "ITEM 2",
      url: "data:image/jpeg;base64,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",
      rating: "5",
      price: "15",
      description: "only 1 remaining in stock"
    },
    {
      title: "ITEM 3",
      price: "29.99",
      description: "4 colours available",
      rating: "4",
    },
    {
      title: "ITEM 4",

      price: "20",
      description: "3 colours available",
      rating: "4.5",
    },
  ]
  const initialCardState = cards.map(() => false);
  const [buttonStates, setButtonStates] = useState(initialCardState);
  const [likedStates, setLikedStates] = useState(cards.map(() => false));
  const windowWidth = window.innerWidth;

  const handleButton = (cardIndex) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[cardIndex] = !newButtonStates[cardIndex];
    setButtonStates(newButtonStates);
    // Logic to add to cart
  };

  const handleLike = (cardIndex) => {
    const newLikeStates = [...likedStates];
    newLikeStates[cardIndex] = !newLikeStates[cardIndex];
    setLikedStates(newLikeStates);
    //Any other logic 
  }
  return (

    <div className="card__container">
    {
    cards.map((card, cardIndex) => (
      <div className="card" key={cardIndex} style= {{width: windowWidth*0.15, height: windowWidth*0.2}}>
        <div className="card__image___full" >
          <img
            className="card__image"
            src={card.url}
            alt= {card.title + ' image'}
            style={{width: windowWidth*0.15, height: windowWidth*0.1}}
          />
          <div className="card__overlay" style={{ position: "absolute" }}>
            <button className="card__overlay__button" onClick={() => handleLike(cardIndex)}>
              {likedStates[cardIndex] ? (
                <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
              ) : (
                <i class="fa-regular fa-heart" style={{ color: "red" }}></i>
              )}
            </button>
          </div>
        </div>
        <div className="card__content">
          <div className="card__header">
            <div className="card__title">
              <h3>{card.title}</h3>
            </div>
            <div className="card__price">
              <h3>${card.price}</h3>
            </div>
          </div>
          <div className="card__text">
            <p>{card.description}</p>
          </div>
          <div className="card__rating">
            <i class="fa-solid fa-star" style={{ color: "gold", paddingTop: "3px" }}></i>
          <div className="card__rating__text" style={{marginLeft: "5px"}}>
            <p>{card.rating}</p>
          </div>
          </div>
          <button
            className={`card__button ${buttonStates[cardIndex] ? "active" : ""}`}
            onClick={() => handleButton(cardIndex)}
          >
            {buttonStates[cardIndex] ? "Added to cart" : "Buy Now"}
          </button>
        </div>
      </div>
    ))
    }
    </div>
  );
};
