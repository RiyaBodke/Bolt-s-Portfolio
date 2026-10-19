
import { useState } from "react";
import EntryPage from "./components/EntryPage";
import CursorGlow from "./components/CursorGlow";
import TopBar from "./components/Topbar";
import MeetBolt from "./components/MeetBolt";
import "./App.css";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CursorGlow />

      <div className="app-shell">
        <TopBar />

        {!entered ? (
          <EntryPage onEnter={() => setEntered(true)} />
        ) : (
          <main className="shop-home">
            <button
              className="shop-exit"
              onClick={() => setEntered(false)}
            >
              ← Back to Entrance
            </button>

            <MeetBolt />
          </main>
        )}
      </div>
    </>
  );
}
