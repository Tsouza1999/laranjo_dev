export default function DesvioCard({ cargo, pratica, picked }) {
  return (
    <div className={`card ${picked ? "pick" : ""}`}>
      <small>No contrato</small>
      <p className="of">{cargo}</p>
      <small>Na prática</small>
      <div className="real">{pratica}</div>
    </div>
  );
}
