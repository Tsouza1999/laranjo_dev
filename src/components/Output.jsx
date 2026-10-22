export default function Output({ wide = false, children }) {
  return (
    <p className={`out ${wide ? "wide" : ""}`} aria-live="polite">
      {children}
    </p>
  );
}
