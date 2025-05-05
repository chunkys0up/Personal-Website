import { commands } from "./commands.js";

//history of commands used
const history = [];

export function getHistory() {
  return history;
}

export function runCommand(input) {
  // cleans up input
  const cmdToFind = input.trim().toLowerCase();
  // finds command through command.js
  const result = commands.find((cmd) => cmd.name === cmdToFind);

  if (!result) {
    throw new Error(`Unknown command: ${cmdToFind}`);
  }
  
  history.push("\t" + cmdToFind);

  const output = result.func();
  
  return output;
}