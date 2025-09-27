import "./App.css";
import { GenerateDeck } from "./factory/generateDeck";
import { Game } from "./components/Game/Game/Game";
import { useEffect, useState } from "react";
import type { Card } from "./factory/generateDeck";

function App() {
  const [deck, setDeck] = useState<Card[]>([]);
  console.log("Deck Legth " + deck?.length);

  useEffect(() => {
    const newDeck = GenerateDeck();
    setDeck(newDeck);
  }, []);

  return (
    <main>
      <Game deck={deck} updateDeck={setDeck} />
    </main>
  );
}

export default App;
