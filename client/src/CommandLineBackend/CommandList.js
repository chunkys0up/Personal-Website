import { commands } from "./commands.js";

//history of commands used
const history = [];

export function getHistory() {
  return history;
}

export function runCommand(input) {
  const cmdToFind = input.trim().toLowerCase();

  console.log(cmdToFind);

  const result = commands.find((cmd) => cmd.name === cmdToFind);
  console.log(result);

  if (!result) {
    throw new Error(`Unknown command: ${cmdToFind}`);
  }

  history.push("\t" + cmdToFind);
  const output = result.func();
  
  return output;
}


