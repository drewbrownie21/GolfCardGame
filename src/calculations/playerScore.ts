import { type Hand2D } from "../components/Game/Game/Game";

export function playerScore(hand: Hand2D) {
  let score: number = 0;
  let scoreArray: number[] = [];

  for (let i = 0; i < hand.length; i++) {
    for (let j = 0; j < hand[i].length; j++) {
      scoreArray = [...scoreArray, hand[i][j]?.value];
    }
  }
  console.log("Score: " + score);
  return score;
}
