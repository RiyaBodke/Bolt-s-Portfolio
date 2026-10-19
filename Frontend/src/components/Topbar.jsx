
import "./EntryPage.css";

export default function TopBar() {
  return (
    <header className="retro-topbar">
      <div className="retro-brand">
        <span className="brand-icon" aria-hidden="true">🐻</span>
        <span className="brand-name">BOLT'S FIX-IT-ALL</span>
      </div>

      <nav className="retro-nav" aria-label="Shop motto">
        <span>TOYS</span>
        <span className="nav-star">✦</span>
        <span>MEMORIES</span>
        <span className="nav-star">✦</span>
        <span>SECOND CHANCES</span>
      </nav>

      <div className="window-controls" aria-hidden="true">
        <span>_</span>
        <span>□</span>
        <span>×</span>
      </div>
    </header>
  );
}
