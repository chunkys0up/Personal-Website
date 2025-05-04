import { commands } from "./commands.js";

export function runCommand(input) {
  const cmdToFind = input.trim().toLowerCase();

  try {
    const result = commands.find((cmd) => cmd.name === cmdToFind);
    const output = result.func();

    console.log(output);
    return output;
  } catch (error) {
    console.log(`Uknown command: ${cmdToFind}`);
  }

  return [`Error executing command : ${cmdToFind}`];
}

runCommand("help");
