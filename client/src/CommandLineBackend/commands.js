import { getHistory } from "./CommandList";

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
    func: () => [`\tHey, I'm Andrew!\n\t
    I'm a Computer Science student at Irvine Valley College, currently working on full-stack projects (like this terminal)
    \n\twith a strong focus on backend development. I've been building with frameworks such as Flask, FastAPI, and SpringBoot.
    \n\tOutside of coding, I enjoy reading manga and manhwas and watching basketball. As I prepare to transfer to Cal State Fullerton,
    \n\tI'm actively seeking internship opportunities to further grow as a software engineer.
    `],
  },
  {
    name: "github",
    description: "View Github",
    func: () => ["https://github.com/chunkys0up github"],
  },
  {
    name: "projects",
    description: "View coding projects",
    func:() => ["\tBiteSafe - A mobile app that recommends restaurants and dishes\n\tbased on what you're not allergic to."],
  },
  {
    name: "email",
    description: "Email to contact me",
    func:() => ["\tContact me: andrewtnguyen0106@gmail.com"],
  },
  {
    name: "linkedin",
    description: "View Linkedin",
    func: () => ["https://linkedin.com/in/andrewtnguyen49345 linkedin"],
  },
  {
    name: "history",
    description: "View terminal commands history",
    func: () => getHistory(),
  },
  {
    name: "clear",
    description: "Clear terminal",
    func:() => ["Cleared Terminal"],
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


