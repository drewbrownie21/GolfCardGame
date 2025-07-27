import "./App.css";
import { Deck } from "./components/Deck";
import { Player } from "./components/Player/Player";
import { useState } from "react";
import type { Card } from "./components/Deck";

function App() {
  const [card, setCard] = useState<Card[] | null>([]);
  console.log(card);

  return (
    <>
      <Deck onCardDrawn={setCard} numOfCardsDrawn={1} />
      <Player />
      {card?.length === 1 ? card[0].rank : "Hello"}
      {card?.length === 1 ? card[0].suit : "Hello"}
    </>
  );
}

export default App;
