// const meeting = require("./meeting.png")

module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
    return message.channel.send(`${args[0].toUpperCase()} IS SUS 100%!!!`)
}

module.exports.help ={
    name: "sus"
}