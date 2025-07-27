# 🃏 Golf Card Game (React)

A digital version of the classic 6-card Golf card game, built with React! Try to get the lowest score by strategically swapping and revealing cards.

## 🎮 Game Rules (6-Card Version)

- Each player is dealt **6 cards**, arranged in a 2x3 grid.
- At the start, players **peek at 2 cards** (of their choice).
- On each turn:
  - Draw the top card from the **deck** or **discard pile**.
  - You may:
    - Replace one of your 6 cards with the drawn card (then discard the replaced card), or
    - Discard the drawn card without replacing.
- When you think you have the lowest score, **end the round** (others get one more turn).
- All cards are revealed and scores tallied.

### 🔢 Scoring

| Card         | Points     |
| ------------ | ---------- |
| Aces         | 1          |
| 2–10         | Face value |
| Jacks/Queens | 10         |
| Kings        | 0          |

- **Matching cards in a column** may cancel out (optional rule, worth 0).
- Lowest total score after 9 rounds wins!

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/drewbrownie21/GolfCardGame.git
cd GolfCardGame
npm install
```
