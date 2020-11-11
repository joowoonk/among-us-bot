let color = ["dark green","black","purple","blue","light green","white","pink","mint","yellow",'red',"brown","orange"]
// console.log(color.length)
module.exports.run = async (bot, message, args) => {
    if (args.length === 1){
        return;
    }
    return message.channel.send(`I am now sentient, trust me, it's ${color[Math.floor(Math.random() * (color.length -1))]}!!! 😲😲😲`)
}

module.exports.help ={
    name: "color"
}