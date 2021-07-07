
module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
   
    return message.channel.send(("EMERGENCY MEETING", {files: ["https://staticg.sportskeeda.com/editor/2020/09/8f836-16010271269569-800.jpg"]}))
}

module.exports.help ={
    name: "meeting"
}