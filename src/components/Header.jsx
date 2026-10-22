import Tabs from "./Tabs.jsx";

export default function Header({ tabs, current, onChange }) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          laranjo<b>.dev</b>
        </div>
        <h1 className="sub">Você sabe que vai escalar né?</h1>
        <Tabs tabs={tabs} current={current} onChange={onChange} />
      </div>
    </header>
  );
}
