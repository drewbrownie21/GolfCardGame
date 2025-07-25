
type Deck = {
    suit: string;
    rank: number;
    value: number;
}
export function Deck(){
    function getValue(rank: number){
        if(rank === 11 || rank === 12) return 10;
        if(rank === 13) return 0;
        return rank;
    }
    const deckOfCards = () => {
        let ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        let suits = ["C", "D", "H", "S"]
        let deck: Deck[] = ranks.flatMap((rank) =>
        suits.map((suit) => ({ suit, rank, value: getValue(rank) }))
      );

        console.log(deck)
    }

    return(
        <>
        <button onClick={deckOfCards}>Generate</button>
        </>
    )
}