import TabPanel from "../components/TabPanel.jsx";
import Output from "../components/Output.jsx";
import Row from "../components/Row.jsx";
import Button from "../components/Button.jsx";
import { regras } from "../data.js";
import { rnd } from "../utils.js";
import { useGenerator } from "../hooks/useGenerator.js";

const make = () => ({
  texto: `SE ${rnd(regras.condicao)}, ENTÃO ${rnd(regras.acao)}, EXCETO se ${rnd(regras.excecao)}.`,
  veredito: rnd(regras.veredito),
});

export default function RegraTab({ active }) {
  const [r, nova] = useGenerator(make);

  return (
    <TabPanel id="regra" active={active} title="Regra de negócio" lead="Gerador de regras que ninguém documentou, mas todo mundo precisa implementar.">
      <Output wide>{r.texto}</Output>
      <Row>
        <Button onClick={nova}>Nova regra</Button>
        <span className="meta">{r.veredito}</span>
      </Row>
    </TabPanel>
  );
}
