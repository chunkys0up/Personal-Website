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
  const bottomRef = useRef(null);

  const handleInput = (e) => {
    const value = e.target.value;

    if (value.endsWith("\n")) {
      const input = value.trim();
      let backendResult;

      try {
        // what we're testing the try catch on. If an error is thrown, display error
        backendResult = runCommand(input);
        console.log(backendResult);

        setLines((prev) => [...prev, `visitor~$ ${input}`, " "]);

        for (let i = 0; i < backendResult.length; i++) {
          setLines((prev) => [...prev, `${backendResult[i]}`]);
        }
        setLines((prev) => [...prev, " "]);
      } catch (error) {
        setLines((prev) => [...prev, `command not found: ${input}`]);
      }

      setTyped("");
    } else {
      setTyped(value);
    }
  };

  // either displaying a normal "terminal display" or a link
  const TerminalLine = ({ line }) => {
    const isLink = line.startsWith("https://");

    let split;
    let link = "";
    let name = "";

    if (isLink) {
      split = line.split(" ");
      link = split[0];
      name = split[1];

      //console.log(`link: ${link} name: ${name}`);
    }

    return isLink ? (
      <pre> {`\t ${name} link: `}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 underline cursor-pointer"
        >
          {link}
        </a>
      </pre>
    ) : (
      <pre>{line}</pre>
    );
  };

  /**
   * Constantly scrolling to the bottom and focusing in when we click into the textarea
   * Hook tells program to run this code everytime the `lines` state array changes.
   */
  useEffect(() => {
    bottomRef.current?.scrollIntoView();
    if (textRef.current) textRef.current.focus();
  }, [lines]);

  return (
    <main
      className=" p-4 overflow-auto scroll-smooth font-mono text-sm"
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
          <TerminalLine key={index} line={line} />
        ))}

        {/* Live typing line */}
        <p>
          <span className="text-rose-500 font-bold mr-1">visitor~$</span>
          <span>{typed}</span>
          <span className="inline-block  ml-1">{isFocused ? "█" : "⎕"}</span>
        </p>

        {/* Auto-scroll if text gets out of screen */}
        <div ref={bottomRef} />
      </div>
    </main>
  );
}
