const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

// config of bot permissions
// note that Guilds == the actual discord server
// we will give it access to the server, members, messages, and the
// content in the message
const mainclient = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// adding an event listener for the client, logging to terminal
// when the bot is online
mainclient.on("ready", (paramclient) => {
  console.log("\x1b[1;92m%s\x1b[0m", `${paramclient.user.displayName} is online`);
});

// detecting messages
mainclient.on("messageCreate", (msg) => {
  // if any other bot, dont execute
  if (msg.author.bot) {
    return;
  }
  console.log("message:", msg.content);
  if (msg.content === "hello") {
    msg.reply("yooooooo");
  }
});

mainclient.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }
  if (interaction.commandName === 'hey') {
    interaction.reply('hey')
  } else if (interaction.commandName === 'ping') {
    interaction.reply('pong')
  }
});

// logging in the client
// discord token hidden :)
mainclient.login(process.env.DISCORD_TOKEN);
