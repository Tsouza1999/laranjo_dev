export default function Tabs({ tabs, current, onChange }) {
  const onKeyDown = (e, i) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    const next = tabs[(i + d + tabs.length) % tabs.length];
    onChange(next.id);
    document.getElementById(`t-${next.id}`)?.focus();
  };

  return (
    <nav role="tablist" aria-label="Seções">
      {tabs.map((t, i) => (
        <button
          key={t.id}
          id={`t-${t.id}`}
          role="tab"
          type="button"
          aria-selected={t.id === current}
          onClick={() => onChange(t.id)}
          onKeyDown={(e) => onKeyDown(e, i)}
        >
          {t.label}
        </button>
      ))}
    </nav>
  );
}
