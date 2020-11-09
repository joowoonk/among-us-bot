const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hello Amongers! check out => https://www.twitch.tv/lizzyliesalot")
}

module.exports.help ={
    name: "streaming"
}