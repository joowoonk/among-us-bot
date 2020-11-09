// const meeting = require("./meeting.png")

module.exports.run = async (bot, message, args) => {

    if (args.length === 0){
        return;
    }
    return message.channel.send(`I love ${args[0].toUpperCase()} so much, I dream you being an imposter`)
}

module.exports.help ={
    name: "love"
}