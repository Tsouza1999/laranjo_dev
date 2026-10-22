import { useRef, useState } from "react";
import TabPanel from "../components/TabPanel.jsx";
import Row from "../components/Row.jsx";
import Button from "../components/Button.jsx";
import DesvioCard from "../components/DesvioCard.jsx";
import { desvios } from "../data.js";
import { pickNew } from "../utils.js";

export default function DesvioTab({ active }) {
  const [picked, setPicked] = useState(-1);
  const grid = useRef(null);

  const sortear = () => {
    const i = pickNew(desvios.length, picked);
    setPicked(i);
    grid.current?.children[i]?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };

  return (
    <TabPanel id="desvio" active={active} title="Desvio de função" lead="O que está no contrato e o que você realmente faz.">
      <Row flush>
        <Button onClick={sortear}>Sortear o desvio de hoje</Button>
      </Row>
      <div className="cards" ref={grid}>
        {desvios.map((d, i) => (
          <DesvioCard key={d.cargo} {...d} picked={i === picked} />
        ))}
      </div>
    </TabPanel>
  );
}
