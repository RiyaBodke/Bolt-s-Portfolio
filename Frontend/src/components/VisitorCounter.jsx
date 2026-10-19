
import { useEffect, useState } from "react";
import "./EntryPage.css";

export default function VisitorCounter() {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    try {
      const key = "bolts-fixitall-visit-count";
      const previous = Number(localStorage.getItem(key) || 4280);
      const next = previous + 1;

      localStorage.setItem(key, String(next));
      setVisits(next);
    } catch {
      setVisits(4281);
    }
  }, []);

  const digits = String(visits ?? 4281).padStart(6, "0");

  return (
    <aside className="visitor-counter" aria-label={`${visits ?? 4281} visits`}>
      <span className="visitor-duck" aria-hidden="true">🐥</span>

      <div className="visitor-details">
        <span className="visitor-label">VISITORS</span>
        <span className="visitor-digits">
          {digits.split("").map((digit, index) => (
            <span key={index}>{digit}</span>
          ))}
        </span>
      </div>
    </aside>
  );
}
