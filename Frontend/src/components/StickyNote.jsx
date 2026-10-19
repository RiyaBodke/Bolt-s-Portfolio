
import "./EntryPage.css";

export default function StickyNote({
  title,
  children,
  position = "note-left-top",
  decoration = "♥",
}) {
  return (
    <aside className={`sticky-note ${position}`}>
      {title && <h2>{title}</h2>}
      <div className="sticky-note-content">{children}</div>
      <span className="note-decoration" aria-hidden="true">
        {decoration}
      </span>
    </aside>
  );
}
