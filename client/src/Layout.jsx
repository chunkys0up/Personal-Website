import TerminalPage from "./pages/TerminalPage";
import SummaryPage from "./pages/SummaryPage";

import { useState } from "react";

export default function Layout() {
  const [activeView, setActiveView] = useState("terminal");

  return (
    <div className="w-full h-screen grid grid-rows-[70px_1fr] bg-amber-100">
      <header className="flex justify-center items-center border-b-3 border-zinc-700">
        <div className="relative flex w-72 h-12 bg-white rounded-full ">
          {/* Sliding background */}
          <div
            className={`absolute top-0 left-0 h-full w-1/2 bg-rose-400 rounded-full transition-transform duration-300 ease-in-out ${
              activeView === "page" ? "translate-x-full" : "translate-x-0"
            }`}
          />

          {/* Buttons */}
          <button
            onClick={() => setActiveView("terminal")}
            className="relative z-10 w-1/2 h-full text-center font-mono transition-colors duration-300"
          >
            Terminal
          </button>
          <button
            onClick={() => setActiveView("page")}
            className="relative z-10 w-1/2 h-full text-center font-mono transition-colors duration-300"
          >
            Page
          </button>
        </div>
      </header>

      {/* Toggle between page components*/}
      {activeView === "terminal" ? <TerminalPage /> : <SummaryPage />}
    </div>
  );
}
