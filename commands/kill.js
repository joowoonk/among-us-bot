
module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
    message.channel.send(`${args[0].toUpperCase()} GOT KILLED!!`)
    return message.channel.send(("Killed", {files: ["https://i.kym-cdn.com/photos/images/original/001/890/995/e1c.gif"]}))
}

module.exports.help ={
    name: "kill"
}