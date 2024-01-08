const { REST, Routes } = require("discord.js");
require("dotenv").config();

// this is an array of / commands that the bot is registered with
//* will also include the main command for calling the auditor
const commands = [
  {
    name: "hey",
    description: "replies with hey",
  },
  {
    name: "ping",
    description: "pong",
  },
  {
    name : "auditcall",
    description : "tag all the auditors for a project"
  } // main auditcall commands recieves 1 param, submitted project
];

const rest = new REST({ version: 10 }).setToken(process.env.DISCORD_TOKEN);

(
    async () => {
        try {
          console.log("Registering slash commands...");
          await rest.put(
            Routes.applicationGuildCommands(
              process.env.CLIENT_ID,
              process.env.GUILD_ID
            ),
            { body: commands }
          );
          console.log("slash commands registered successfully...");
        } catch (error) {
          console.log("\x1b[1;91m%s\x1b[0m", `BOT ERR: ${error}`);
        }
      }
)();
