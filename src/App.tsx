import "./App.css";
import { Deck } from "./components/Deck";
import { Player } from "./components/Player/Player";
import { useState } from "react";
import type { Card } from "./components/Deck";

function App() {
  const [deck, setDeck] = useState<Card[] | null>([]);
  console.log(deck);

  return (
    <>
      <Deck createDeck={setDeck} />
      <Player />
    </>
  );
}

export default App;
