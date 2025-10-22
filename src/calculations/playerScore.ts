import { type Hand2D } from "../components/Game/Game/Game";

export function playerScore(hand: Hand2D) {
  let score: number = 0;

  let total = 0;

  console.log(hand)

  for (let c = 0; c < hand[0].length; c++) {
    const top = hand[0][c];
    const bottom = hand[1][c];

    if (top === bottom) continue; // matching column = 0 points

    total += top + bottom;
  }

  console.log(total)

  return score;
}
