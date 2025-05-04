import React, { useState, useEffect, useRef } from "react";
import { runCommand } from "../CommandLineBackend/CommandList";

export default function TerminalPage() {
  const [typed, setTyped] = useState("");
  const textRef = useRef(null);
  const [isFocused, setFocused] = useState(true);
  const [lines, setLines] = useState([
    "Hello Visitor!",
    "For a list of available commands, type `help`.",
  ]);

  const handleInput = (e) => {
    const value = e.target.value;

    if (value.endsWith("\n")) {
      const input = value.trim();
      let backendResult = runCommand(input);

      // Add to setLines
      console.log(backendResult[0].substring(0, 5));

      if (backendResult[0].substring(0, 5) !== "Error") {
        console.log("passed through");
        setLines((prev) => [...prev, `visitor~$ ${input}`, " "]);
        for (let i = 0; i < backendResult.length; i++) {
          setLines((prev) => [...prev, `${backendResult[i]}`]);
        }
        setLines((prev) => [...prev, " "]);
      } else {
        setLines((prev) => [...prev, `visitor~$ ${input}`, `${backendResult[0]}`]);
      }

      setTyped("");
    } else {
      setTyped(value);
    }
  };

  useEffect(() => {
    if (textRef.current) textRef.current.focus();
  }, []);

  return (
    <main
      className=" p-4 overflow-auto font-mono text-sm"
      onClick={() => textRef.current?.focus()}
    >
      <textarea
        ref={textRef}
        value={typed}
        onChange={handleInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="absolute opacity-0"
        autoFocus
      />

      <div className="space-y-1">
        {lines.map((line, index) => (
          <pre key={index}>{line}</pre>
        ))}

        {/* Live typing line */}
        <p>
          <span className="text-pink-500 mr-1">visitor~$</span>
          <span>{typed}</span>
          <span className="inline-block  ml-1">{isFocused ? "█" : "⎕"}</span>
        </p>
      </div>
    </main>
  );
}
