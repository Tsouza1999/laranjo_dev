import { useMemo, useState } from "react";
import TabPanel from "../components/TabPanel.jsx";
import Row from "../components/Row.jsx";
import Button from "../components/Button.jsx";
import BingoBoard from "../components/BingoBoard.jsx";
import { bingoItens } from "../data.js";
import { shuffle } from "../utils.js";

const FREE = "Escalou! (grátis)";

const LINES = (() => {
  const l = [];
  for (let r = 0; r < 5; r++) {
    l.push([0, 1, 2, 3, 4].map((c) => r * 5 + c));
    l.push([0, 1, 2, 3, 4].map((c) => c * 5 + r));
  }
  l.push([0, 6, 12, 18, 24], [4, 8, 12, 16, 20]);
  return l;
})();

function novoCartao() {
  const itens = shuffle(bingoItens).slice(0, 24);
  itens.splice(12, 0, FREE);
  const marked = Array(25).fill(false);
  marked[12] = true;
  return { itens, marked };
}

export default function BingoTab({ active }) {
  const [card, setCard] = useState(novoCartao);

  const toggle = (i) =>
    setCard((c) => ({ ...c, marked: c.marked.map((m, idx) => (idx === i ? !m : m)) }));

  const winCells = useMemo(() => {
    const wins = LINES.filter((l) => l.every((i) => card.marked[i]));
    return { cells: new Set(wins.flat()), any: wins.length > 0 };
  }, [card.marked]);

  return (
    <TabPanel id="bingo" active={active} title="Bingo da daily" lead="Marque o que você ouvir. Linha, coluna ou diagonal completa vale bingo.">
      <BingoBoard card={card} winCells={winCells.cells} onToggle={toggle} />
      <div className="banner" aria-live="polite">
        {winCells.any && "BINGO! Grita “ESCALOU!” na call."}
      </div>
      <Row>
        <Button onClick={() => setCard(novoCartao())}>Novo cartão</Button>
      </Row>
    </TabPanel>
  );
}
