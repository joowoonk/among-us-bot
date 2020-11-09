const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hello Amongers! We are streaming right now! => https://www.twitch.tv/lizzyliesalot")
}

module.exports.help ={
    name: "streaming"
}