export function playerScore(hand: (number | null)[][]) {
  let total = 0;

  for (let c = 0; c < hand[0].length; c++) {
    const top = hand[0][c] ?? 0; // if null, count as 0
    const bottom = hand[1][c] ?? 0; // if null, count as 0

    if (top === bottom) continue; // matching column = 0 points

    total += top + bottom;
  }

  console.log(total);
  return total;
}
