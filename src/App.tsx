import "./App.css";
import { GenerateDeck } from "./components/generateDeck";
import { Game } from "./components/Game/Game";
import { Player } from "./components/Player/Player";
import { useEffect, useState } from "react";
import type { Card } from "./components/generateDeck";

function App() {
  const [deck, setDeck] = useState<Card[] | null>([]);
  console.log(deck?.length);

  useEffect(() => {
    const newDeck = GenerateDeck();
    setDeck(newDeck);
  }, []);

  return (
    <>
      <Player />
      <Game deck={deck} updateDeck={setDeck} onCardDrawn />
    </>
  );
}

export default App;
