
import { useState } from "react";
import TopBar from "./Topbar";
import StickyNote from "./StickyNote";
import VisitorCounter from "./VisitorCounter";
import "./EntryPage.css";

const stars = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  symbol: index % 3 === 0 ? "✦" : "✧",
}));

export default function EntryPage({ onEnter }) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <main className="entry-screen">
      <div className="entry-artboard">
        <picture className="entry-picture">
          <source
            media="(max-width: 600px)"
            srcSet="/images/shop-mobile.png"
          />

          <source
            media="(min-width: 1800px)"
            srcSet="/images/shop-pc.png"
          />

          <img
            src="/images/shop-desktop.png"
            alt="Bolt's Fix-It-All toy repair shop"
            className="entry-artwork"
            draggable="false"
          />
        </picture>

        <TopBar />

        <div className="star-layer" aria-hidden="true">
          {stars.map((star) => (
            <span
              key={star.id}
              className={`magic-star star-position-${star.id + 1}`}
            >
              {star.symbol}
            </span>
          ))}
        </div>

        <StickyNote
          position="note-left-top"
          decoration="♥"
        >
          Every toy has a story...
          <br />
          Let's fix it together!
        </StickyNote>

        <StickyNote
          title="Welcome!"
          position="note-right-top"
          decoration="♡"
        >
          A cozy toy repair shop where forgotten treasures get a new life.
        </StickyNote>

        <VisitorCounter />

        <button
          className="sound-button"
          type="button"
          onClick={() => setSoundEnabled((previous) => !previous)}
          aria-pressed={soundEnabled}
        >
          <span className="sound-note" aria-hidden="true">
            {soundEnabled ? "♫" : "♪"}
          </span>
          <span>Sound</span>
          <span
            className={`sound-switch ${soundEnabled ? "is-on" : ""}`}
            aria-hidden="true"
          >
            <span />
          </span>
        </button>

        <button
          className="enter-button"
          type="button"
          onClick={onEnter}
        >
          <span>Enter the Shop</span>
          <span className="enter-arrow" aria-hidden="true">→</span>
        </button>

        <footer className="retro-statusbar">
          <span>Warming up the workshop...</span>
          <div className="status-progress" aria-hidden="true">
            <span />
          </div>
          <span className="status-percent">READY!</span>
          <span className="status-message">
            Second chances look good on you. ♥
          </span>
        </footer>
      </div>
    </main>
  );
}
