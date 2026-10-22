export default function Row({ children, flush = false }) {
  return <div className={`row ${flush ? "flush" : ""}`}>{children}</div>;
}
