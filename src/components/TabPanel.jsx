export default function TabPanel({ id, active, title, lead, children }) {
  return (
    <section className="panel" id={`p-${id}`} role="tabpanel" aria-labelledby={`t-${id}`} hidden={!active}>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}
