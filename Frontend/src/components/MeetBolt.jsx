import { useEffect, useRef, useState } from "react";
import "./MeetBolt.css";

const traits = [
  {
    icon: "♥",
    title: "Curious",
    text: "I love understanding how things work. Every toy is a new puzzle!",
  },
  {
    icon: "⚙",
    title: "Patient",
    text: "Sometimes fixes take time, and that's okay. Good repairs need care.",
  },
  {
    icon: "✦",
    title: "Creative",
    text: "I use imagination to find solutions, especially when parts are missing.",
  },
  {
    icon: "♻",
    title: "Second Chances",
    text: "Broken doesn't mean useless. There's a new story waiting.",
  },
];

const activities = [
  "Repairing a robot",
  "Organising the workshop",
  "Adding new toys",
  "Meeting new friends! (you!)",
  "Planning something exciting...",
];

export default function MeetBolt() {
  const [waving, setWaving] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeNav, setActiveNav] = useState("Meet Bolt");
  const [checkedActivities, setCheckedActivities] = useState([3]);
  const waveTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (waveTimer.current) window.clearTimeout(waveTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!storyOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setStoryOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("meet-bolt-modal-open");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("meet-bolt-modal-open");
    };
  }, [storyOpen]);

  const playTinyChime = () => {
    if (!soundOn || typeof window === "undefined") return;
    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, context.currentTime);
      oscillator.frequency.setValueAtTime(880, context.currentTime + 0.09);
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, context.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.24);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.25);
      oscillator.onended = () => context.close();
    } catch {
      // Audio is an optional enhancement; the page still works without it.
    }
  };

  const sayHello = () => {
    setWaving(true);
    playTinyChime();
    if (waveTimer.current) window.clearTimeout(waveTimer.current);
    waveTimer.current = window.setTimeout(() => setWaving(false), 1700);
  };

  const toggleActivity = (index) => {
    setCheckedActivities((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
    playTinyChime();
  };

  const navigateTo = (label) => {
    setActiveNav(label);
    playTinyChime();
    if (label === "Meet Bolt") {
      document.querySelector(".meet-bolt-character")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (label === "Scrapbook") {
      document.querySelector(".meet-bolt-traits")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (label === "Contact") {
      setStoryOpen(true);
    }
  };

  return (
    <main className="meet-bolt-page">
      <section className="meet-bolt-artboard" aria-label="Bolt's toy repair workshop">
        <picture className="meet-bolt-background-wrap" aria-hidden="true">
          <source
            media="(max-width: 600px)"
            srcSet="/images/intro-mobile.png"
          />
          <source
            media="(min-width: 1600px)"
            srcSet="/images/intro-pc.png"
          />
          <img
            className="meet-bolt-background"
            src="/images/intro-desktop.png"
            alt=""
            draggable="false"
          />
        </picture>

        <div className="meet-bolt-scene-effects" aria-hidden="true">
          <span className="meet-bolt-spark meet-bolt-spark-1">✦</span>
          <span className="meet-bolt-spark meet-bolt-spark-2">✧</span>
          <span className="meet-bolt-spark meet-bolt-spark-3">✦</span>
          <span className="meet-bolt-spark meet-bolt-spark-4">✧</span>
          <span className="meet-bolt-spark meet-bolt-spark-5">✦</span>
          <span className="meet-bolt-dust meet-bolt-dust-1" />
          <span className="meet-bolt-dust meet-bolt-dust-2" />
          <span className="meet-bolt-dust meet-bolt-dust-3" />
          <span className="meet-bolt-dust meet-bolt-dust-4" />
        </div>


        <aside className="meet-bolt-sidebar" aria-label="Workshop sections">
          <button
            type="button"
            className={`meet-bolt-side-link meet-bolt-shop-map ${activeNav === "Shop Map" ? "is-active" : ""}`}
            onClick={() => navigateTo("Shop Map")}
          >
            <span aria-hidden="true">🧸</span><b>Shop Map</b>
          </button>
          <button
            type="button"
            className={`meet-bolt-side-link meet-bolt-meet-link ${activeNav === "Meet Bolt" ? "is-active" : ""}`}
            onClick={() => navigateTo("Meet Bolt")}
          >
            <span aria-hidden="true">▣</span><b>Meet Bolt</b>
          </button>
          <button type="button" className="meet-bolt-side-link" onClick={() => navigateTo("Repair Rules")}>
            <span aria-hidden="true">⚙</span><b>Repair Rules</b>
          </button>
          <button type="button" className="meet-bolt-side-link" onClick={() => navigateTo("Tool Wall")}>
            <span aria-hidden="true">⚒</span><b>Tool Wall</b>
          </button>
          <button type="button" className="meet-bolt-side-link" onClick={() => navigateTo("Projects")}>
            <span aria-hidden="true">◇</span><b>Projects</b>
          </button>
          <button type="button" className="meet-bolt-side-link" onClick={() => navigateTo("Scrapbook")}>
            <span aria-hidden="true">▤</span><b>Scrapbook</b>
          </button>
          <button type="button" className="meet-bolt-side-link" onClick={() => navigateTo("Contact")}>
            <span aria-hidden="true">✉</span><b>Contact</b>
          </button>
        </aside>

        <div className="meet-bolt-sound">
          <span aria-hidden="true">♫</span>
          <span>Sound</span>
          <button
            type="button"
            className={`meet-bolt-toggle ${soundOn ? "is-on" : ""}`}
            aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
            aria-pressed={soundOn}
            onClick={() => setSoundOn((value) => !value)}
          >
            <span />
          </button>
        </div>

        <div className="meet-bolt-mobile-hero">
        <section className="meet-bolt-title-card">
          <span className="meet-bolt-eyebrow">A LITTLE ROBOT WITH A BIG BELIEF</span>
          <h1>Meet <em>Bolt!</em></h1>
          <p>That every broken toy deserves a second chance. <span>♡</span></p>
        </section>

        <aside className="meet-bolt-note meet-bolt-note-left">
          <p>Hi there!<br />I’m Bolt! <span>👋</span><br />I run this little repair shop, give forgotten toys a new life and try to make the world a little brighter, one fix at a time.</p>
          <b>♥</b>
        </aside>

        <aside className="meet-bolt-note meet-bolt-note-right">
          <p>Every broken thing has a story. That’s why I fix them! <span>✦</span></p>
        </aside>

        <div className={`meet-bolt-character ${waving ? "is-waving" : ""}`}>
          <button
            type="button"
            className="meet-bolt-character-button"
            onClick={sayHello}
            aria-label="Say hello to Bolt"
          >
            <span className="meet-bolt-character-halo" aria-hidden="true" />
            <img
              className="meet-bolt-character-image"
              src="/images/bolt-happy.png"
              alt="Bolt, the friendly toy repair robot"
              draggable="false"
            />
            <span className={`meet-bolt-greeting ${waving ? "is-visible" : ""}`}>
              {waving ? "Yay! Hello, friend! ♥" : "Click Bolt to say hello!"}
            </span>
          </button>
        </div>

        </div>

        <button
          type="button"
          className="meet-bolt-story-button"
          onClick={() => {
            setStoryOpen(true);
            playTinyChime();
          }}
          aria-label="Watch Bolt's story"
        >
          <span className="meet-bolt-story-preview" aria-hidden="true">
            <span className="meet-bolt-preview-stars">✦ ✧ ✦</span>
            <span className="meet-bolt-preview-bot">▣</span>
          </span>
          <strong>Watch<br />Bolt’s Story</strong>
          <span className="meet-bolt-play" aria-hidden="true">▶</span>
        </button>


        <section className="meet-bolt-traits">
          <h2>⭐ A Few Things About Me</h2>
          <div className="meet-bolt-traits-grid">
            {traits.map((trait) => (
              <article className="meet-bolt-trait" key={trait.title}>
                <span className="meet-bolt-trait-icon" aria-hidden="true">{trait.icon}</span>
                <h3>{trait.title}</h3>
                <p>{trait.text}</p>
                <span className="meet-bolt-doodle" aria-hidden="true">✧ ⚙</span>
              </article>
            ))}
          </div>
        </section>

        <section className="meet-bolt-activities">
          <h2>Current Activities...</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={activity}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedActivities.includes(index)}
                    onChange={() => toggleActivity(index)}
                  />
                  <span>{activity}</span>
                </label>
              </li>
            ))}
          </ul>
          <span className="meet-bolt-activity-heart" aria-hidden="true">♡</span>
        </section>

        <aside className="meet-bolt-bottom-note">
          Good toys<br />brighter tomorrow <span>♡</span>
        </aside>

        <div className="meet-bolt-live-status" aria-live="polite">
          {waving ? "Bolt is waving hello!" : ""}
        </div>
      </section>

      {storyOpen && (
        <div
          className="meet-bolt-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setStoryOpen(false);
          }}
        >
          <section
            className="meet-bolt-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="meet-bolt-modal-title"
          >
            <button
              className="meet-bolt-modal-close"
              type="button"
              onClick={() => setStoryOpen(false)}
              aria-label="Close story"
            >
              ×
            </button>
            <div className="meet-bolt-modal-art">
              <img src="/images/bolt-happy.png" alt="Bolt smiling in the workshop" />
              <span aria-hidden="true">✦ ✧ ♥ ✧ ✦</span>
            </div>
            <p className="meet-bolt-modal-kicker">A LITTLE WORKSHOP TALE</p>
            <h2 id="meet-bolt-modal-title">Every Toy Has a Story</h2>
            <p>
              I’m Bolt! Around here, a broken spring or a missing button
              doesn’t mean the adventure is over. Every little toy deserves
              care, a little imagination, and another chance.
            </p>
            <p>Let’s fix something wonderful together. <span>♥</span></p>
            <button
              className="meet-bolt-modal-cta"
              type="button"
              onClick={() => setStoryOpen(false)}
            >
              Back to the workshop <span aria-hidden="true">↗</span>
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
