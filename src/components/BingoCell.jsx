export default function BingoCell({ text, marked, free, win, onToggle }) {
  return (
    <button
      type="button"
      className={`cell ${free ? "free" : ""} ${win ? "win" : ""}`}
      aria-pressed={marked}
      onClick={free ? undefined : onToggle}
    >
      {text}
    </button>
  );
}
