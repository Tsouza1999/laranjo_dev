import BingoCell from "./BingoCell.jsx";

const FREE_INDEX = 12;

export default function BingoBoard({ card, winCells, onToggle }) {
  return (
    <div className="bingo">
      {card.itens.map((text, i) => (
        <BingoCell
          key={i}
          text={text}
          free={i === FREE_INDEX}
          marked={card.marked[i]}
          win={winCells.has(i)}
          onToggle={() => onToggle(i)}
        />
      ))}
    </div>
  );
}
