import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FrasesTab from "./tabs/FrasesTab.jsx";
import DesculpasTab from "./tabs/DesculpasTab.jsx";
import BingoTab from "./tabs/BingoTab.jsx";
import RegraTab from "./tabs/RegraTab.jsx";
import DesvioTab from "./tabs/DesvioTab.jsx";

// para criar uma aba nova: crie o componente em src/tabs e registre aqui
const TABS = [
  { id: "frases", label: "Frases", Component: FrasesTab },
  { id: "desculpas", label: "Desculpas", Component: DesculpasTab },
  { id: "bingo", label: "Bingo da daily", Component: BingoTab },
  { id: "regra", label: "Regra de negócio", Component: RegraTab },
  { id: "desvio", label: "Desvio de função", Component: DesvioTab },
];

const fromHash = () => {
  const h = window.location.hash.slice(1);
  return TABS.some((t) => t.id === h) ? h : TABS[0].id;
};

export default function App() {
  const [current, setCurrent] = useState(fromHash);

  const change = (id) => {
    setCurrent(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <Header tabs={TABS} current={current} onChange={change} />
      <main>
        {TABS.map(({ id, Component }) => (
          <Component key={id} active={id === current} />
        ))}
      </main>
      <Footer />
    </>
  );
}
