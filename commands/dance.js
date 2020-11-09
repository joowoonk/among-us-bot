
module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
    message.channel.send(`move that BOOTY`)
    return message.channel.send(("dance time", {files: ["https://i.kym-cdn.com/photos/images/original/001/893/924/569.gif"]}))
}

module.exports.help ={
    name: "dance"
}