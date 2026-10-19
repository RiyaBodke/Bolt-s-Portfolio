
import { useState } from "react";
import EntryPage from "./components/EntryPage";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CursorGlow />

      {!entered ? (
        <EntryPage onEnter={() => setEntered(true)} />
      ) : (
        <main className="shop-home">
          <h1>Welcome to Bolt's Fix-It-All!</h1>
          <p>
            Every toy has a story. Let's give yours another chapter.
          </p>
        </main>
      )}
    </>
  );
}
