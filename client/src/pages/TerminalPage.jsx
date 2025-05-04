import React, { useState, useEffect, useRef } from "react";
import { runCommand } from "../CommandLineBackend/CommandList";

export default function TerminalPage() {
  const [typed, setTyped] = useState("");
  const textRef = useRef(null);
  const [lines, setLines] = useState([
    "Hello Visitor!",
    "For a list of available commands, type `help`.",
  ]);
  const bottomRef = useRef(null);

  // Handles command line inputs
  const handleInput = (e) => {
    const value = e.target.value;

    if (value.endsWith("\n")) {
      const input = value.trim();
      let backendResult;

      try {
        backendResult = runCommand(input);

        // formatting when sending to output
        setLines((prev) => [...prev, `visitor~$ ${input}`, " "]);

        for (let i = 0; i < backendResult.length; i++) {
          setLines((prev) => [...prev, `${backendResult[i]}`]);
        }

        setLines((prev) => [...prev, " "]);
      } catch (error) {
        setLines((prev) => [...prev, `command not found: ${input}`]);
      }

      // create an empty array of lines
      if(input === 'clear')
        setLines([]);

      setTyped("");
    } else {
      setTyped(value);
    }
  };

  const TerminalLine = ({ line }) => {
    const isLink = line.startsWith("https://");

    if (isLink) {
      const [link, name] = line.split(" ");

      return (
        <pre className="whitespace-pre-wrap break-words">
          {`\t${name} link: `}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline cursor-pointer"
          >
            {link}
          </a>
        </pre>
      );
    }

    return <pre className="whitespace-pre-wrap break-words">{line}</pre>;
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
    if (textRef.current) textRef.current.focus();
  }, [lines]);

  return (
    <main
      className="p-4 overflow-auto scroll-smooth font-mono"
      onClick={(e) => {
        const selection = window.getSelection();
        if (!selection || selection.toString().length === 0) {
          textRef.current?.focus();
        }
      }}
    >
      <textarea
        ref={textRef}
        value={typed}
        onChange={handleInput}
        className="absolute opacity-0"
        autoFocus
      />

      <div className="space-y-1">
        {lines.map((line, index) => (
          <TerminalLine key={index} line={line} />
        ))}

        {/* Live typing line */}
        <p>
          <span className="text-rose-500 mr-1">visitor~$</span>
          <span>{typed}</span>
          <span className="align-text-bottom blinking-cursor">|</span>
        </p>

        <div ref={bottomRef} />
      </div>
    </main>
  );
}
