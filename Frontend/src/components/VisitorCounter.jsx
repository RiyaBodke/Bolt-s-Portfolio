
import { useEffect, useState } from "react";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "https://bolt-s-portfolio.onrender.com"
).replace(/\/$/, "");

export default function VisitorCounter() {
  const [visits, setVisits] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function recordVisit() {
      try {
        const response = await fetch(
          `${API_URL}/api/visitors/visit`,
          {
            method: "POST",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error("Could not record visit");
        }

        const result = await response.json();
        setVisits(Number(result.totalVisits));
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Visitor counter:", err);
          setError(true);
        }
      }
    }

    recordVisit();

    return () => controller.abort();
  }, []);

  const digits = String(visits ?? 0).padStart(6, "0");

  return (
    <aside
      className="visitor-counter"
      aria-label={`${visits ?? "Loading"} recorded visits`}
    >
      <span className="visitor-duck" aria-hidden="true">
        🐥
      </span>

      <div className="visitor-details">
        <span className="visitor-label">
          {error ? "VISITORS" : visits === null ? "LOADING" : "VISITORS"}
        </span>

        <span className="visitor-digits">
          {digits.split("").map((digit, index) => (
            <span key={index}>{digit}</span>
          ))}
        </span>

        {error && (
          <span className="visitor-error">Count unavailable</span>
        )}
      </div>
    </aside>
  );
}
