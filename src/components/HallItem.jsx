export default function HallItem({ frase, count, onPlus }) {
  return (
    <li>
      <div className="t">{frase}</div>
      <button type="button" className="plus" aria-label={`Contar mais uma vez: ${frase}`} onClick={onPlus}>
        +1 · <span>{count}</span>
      </button>
    </li>
  );
}
