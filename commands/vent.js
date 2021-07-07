// const meeting = require("./meeting.png")

module.exports.run = async (bot, message, args) => {
   
    if (args.length === 0){
        return;
    }

    return message.channel.send(`I saw ${args[0].toUpperCase()} vent!!!!!`)
}

module.exports.help ={
    name: "vent"
}