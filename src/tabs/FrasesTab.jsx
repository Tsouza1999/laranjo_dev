import { useEffect, useState } from "react";
import TabPanel from "../components/TabPanel.jsx";
import Output from "../components/Output.jsx";
import Row from "../components/Row.jsx";
import Button from "../components/Button.jsx";
import HallItem from "../components/HallItem.jsx";
import { frases } from "../data.js";
import { pickNew } from "../utils.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export default function FrasesTab({ active }) {
  const [atual, setAtual] = useState(() => pickNew(frases.length, -1));
  const [counts, setCounts] = useLocalStorage("laranjo-counts", frases.map(() => 0));

  const proxima = () => setAtual((cur) => pickNew(frases.length, cur));

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        proxima();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  const plusOne = (i) => {
    setCounts((c) => c.map((n, idx) => (idx === i ? n + 1 : n)));
    setAtual(i);
  };

  return (
    <TabPanel id="frases" active={active} title="Frases do time" lead="A metodologia ágil do nosso time para entregar no último segundo.">
      <Output>“{frases[atual]}”</Output>
      <Row>
        <Button onClick={proxima}>Outra!</Button>
        <span className="meta">ou aperta espaço</span>
      </Row>
      <ul className="hall">
        {frases.map((f, i) => (
          <HallItem key={f} frase={f} count={counts[i] ?? 0} onPlus={() => plusOne(i)} />
        ))}
      </ul>
    </TabPanel>
  );
}
