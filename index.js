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

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err)
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0){
        console.log("There are no commands to load...");
    }
    console.log(`loading ${jsfiles.length} commands`)  
    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(props.help.name, props)
    })
})



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