import { useState } from "react";

const Card_Emoji = ["🐶", "🐱", "🐙", "🐧"];

const duplicate_Emoji = [...Card_Emoji, ...Card_Emoji].map((emoji, index) => ({
  id: index,
  value: emoji,
  isFlipped: false,
  isMatched: false,
}));

function MemoryCard() {
  const [cards, setCards] = useState(() => shuffled());
  const [firstSelected, setFirstSelected] = useState(null);
  const [isdisabled, setisdisabled] = useState(false);

  function shuffled() {
    return [...duplicate_Emoji]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
  }

  function handleCardClick(clickCard) {
    // 1. THE GUARD CLAUSE

    if (isdisabled || clickCard.isFlipped || clickCard.isMatched) return;

    // 2. FIRST CLICK LOGIC

    if (!firstSelected) {
      setCards((prevCard) => {
        return prevCard.map((card) => {
          if (card.id === clickCard.id) {
            return { ...card, isFlipped: true };
          } else {
            return card;
          }
        });
      });
      setFirstSelected(clickCard);
    }
    // 3. SECOND CLICK LOGIC
    // If firstSelected is NOT null...
    else {
      // - Immediately lock the board using setisdisabled.
      setisdisabled(true);
      // A) MATCHING CHECK
      // If firstSelected.value equals clickCard.value...
      if (firstSelected.value === clickCard.value) {
        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.id === firstSelected.id || card.id === clickCard.id) {
              return { ...card, isFlipped: true, isMatched: true };
            } else return card;
          });
        });
        setFirstSelected(null);
        setisdisabled(false);
      }
      //  MISMATCH CHECK

      else {
        // - Phase 1: Run setCards to instantly flip the second card up.

        setCards((prevCard) => {
          return prevCard.map((card) => {
            if (card.id === clickCard.id) {
              return { ...card, isFlipped: true };
            } else {
              return card;
            }
          });
        });

        setTimeout(() => {
          setCards((prevCard) => {
            return prevCard.map((card) => {
              if (card.id === firstSelected.id || card.id === clickCard.id) {
                return { ...card, isFlipped: false };
              } else {
                return card;
              }
            });
          });
          setFirstSelected(null);
          setisdisabled(false);
        }, 1000);
      }
    }
  }

  function resetGame() {
    setFirstSelected(null);
    setisdisabled(false);

    setCards(shuffled);
  }

  return (
    <div>
      <h1>Memory Card Game 🎮</h1>
      <div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div>
        {cards.map((card) => (
          <button key={card.id} onClick={() => handleCardClick(card)}>
            {card.isFlipped || card.isMatched ? card.value : "❓"}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MemoryCard;
