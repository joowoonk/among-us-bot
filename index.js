require("dotenv").config();

const discord = require("discord.js")

const config = require("./config.json")
const fs = require("fs")
const bot = new discord.Client({disableEveryone: true})
const queue = new Map();
const ytdl = require("ytdl-core");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`)
    // bot.user.setActivity("..Under Construction!");
    // if (config.activity.streaming == true){
        bot.user.setActivity("twitch => lizzyliesalo")
        // bot.user.setStatus("dnd")
    // }
})


bot.commands = new discord.Collection();


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase()
    let args = messageArray.slice(1)

    if(!command.startsWith(prefix)) return;



    

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args)
})




bot.login(process.env.TOKEN);