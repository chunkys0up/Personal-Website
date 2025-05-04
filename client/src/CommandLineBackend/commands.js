// List of commands that we can call on and what their functionality is
export const commands = [
  {
    name: "help",
    description: "List of available commands: ",
    func: () => helpCommand(),
  },
  {
    name: "aboutme",
    description: "Who is Patheit?",
    func: "Add aboutme description later",
  },
  {
    name: "github",
    description: "View Github link",
    func: "https://github.com/chunkys0up",
  },
  {
    name: "projects",
    description: "View coding projects",
    func: "Add projects later",
  },
  {
    name: "email",
    description: "Email to contact me",
    func: "andrewtnguyen0106@gmail.com",
  },
  {
    name: "linkedin",
    description: "View Linkedin",
    func: "www.linkedin.com/in/andrewtnguyen49345",
  },
  {
    name: "history",
    description: "View terminal history",
    func: "Add function to get list of history later",
  },
  {
    name: "clear",
    description: "Clear terminal",
    func: "clearTerminal",
  },
];

/** helpCommand()
 * @returns the formatted commands of help command line call
 */
function helpCommand() {
  let list_of_commands = [];

  for (let i = 1; i < commands.length; i++) {
    let name = "\t" + commands[i].name;
    let description = commands[i].description;

    let paddedCommand = name.padEnd(20, " ") + description;
    list_of_commands.push(paddedCommand);
  }

  return list_of_commands;
}


/**
 * Testing commands
 */

//console.log(helpCommand());
