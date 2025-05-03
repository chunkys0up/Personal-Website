import React, { useState, useEffect, useRef } from "react";

export default function TerminalPage() {
  const [typed, setTyped] = useState("");
  const textRef = useRef(null);
  const [isFocused, setFocused] = useState(true);
  const [lines, setLines] = useState([
    "Hello Visitor!",
    "For a list of available commands, type `help`."
  ]);

  const handleInput = (e) => {
    const value = e.target.value;

    if (value.endsWith("\n")) {
      const input = value.trim(); //remove newline
      setLines((prev) => [...prev, `$ ${input}`]);
      setTyped("");
    } else setTyped(value);
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

        className=" absolute opacity-0"
        autoFocus
      />

      <div className="space-y-1">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {/* Live typing line */}
        <p>
          <span className="text-pink-400 mr-1">visitor~$</span>
          <span>{typed}</span>
          <span className="inline-block  ml-1">
          {isFocused ? "█" : "⎕"}
          </span>
        </p>
      </div>
    </main>
  );
}
