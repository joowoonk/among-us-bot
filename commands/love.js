// const meeting = require("./meeting.png")

module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
    return message.channel.send(`I love ${args[0].toUpperCase()}`)
}

module.exports.help ={
    name: "love"
}