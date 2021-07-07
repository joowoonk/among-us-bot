const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hello Amongers! I am evolving!")
}

module.exports.help ={
    name: "greetings"
}