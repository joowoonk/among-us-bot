// const meeting = require("./meeting.png")

module.exports.run = async (bot, message, args) => {
    if (args.length === 0){
        return;
    }
    return message.channel.send(`${args[0].toUpperCase()} IS SUS 100%!!!`)
}

module.exports.help ={
    name: "sus"
}