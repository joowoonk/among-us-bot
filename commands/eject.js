let eject = ["an imposter","not an imposter"]
// console.log(eject[Math.floor(Math.random() * 2)])
// console.log(eject.length)
module.exports.run = async (bot, message, args) => {

    return message.channel.send(    `.      　。　　　　•　    　ﾟ　　。\n
    　　.　　　.　　　  　　.　　　　　。　　   。　.\n
     　.　　      。　        ඞ   。　    .    •\n
     •        ${args[0]} was ${eject[Math.floor(Math.random() * 2)]}。。。　.\n
    　 　　。　　　　　　ﾟ　　　.　　　　　.\n
    ,　　　　.　 .　　       .               。\n`)
}

module.exports.help ={
    name: "eject"
}