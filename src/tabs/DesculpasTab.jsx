import { useState } from "react";
import TabPanel from "../components/TabPanel.jsx";
import Output from "../components/Output.jsx";
import Row from "../components/Row.jsx";
import Button from "../components/Button.jsx";
import { desculpas } from "../data.js";
import { rnd } from "../utils.js";
import { useGenerator } from "../hooks/useGenerator.js";

const make = () => ({
  texto: `${rnd(desculpas.abertura)} ${rnd(desculpas.causa)}, ${rnd(desculpas.fecho)}`,
  credibilidade: Math.floor(Math.random() * 101),
});

export default function DesculpasTab({ active }) {
  const [d, gerar] = useGenerator(make);
  const [aviso, setAviso] = useState("");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(d.texto);
      setAviso("Copiado. Boa sorte na daily.");
    } catch {
      setAviso("Não deu para copiar, seleciona o texto.");
    }
  };

  const nova = () => {
    setAviso("");
    gerar();
  };

  return (
    <TabPanel id="desculpas" active={active} title="Gerador de desculpas" lead="Para quando o card não andou e a daily está chegando.">
      <Output wide>{d.texto}</Output>
      <Row>
        <Button onClick={nova}>Gerar outra</Button>
        <Button variant="ghost" onClick={copiar}>Copiar</Button>
        <span className="meta">{aviso || `Credibilidade: ${d.credibilidade}%`}</span>
      </Row>
    </TabPanel>
  );
}
