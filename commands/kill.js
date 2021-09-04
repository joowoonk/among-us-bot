let kill = [
  "https://tenor.com/view/among-us-impostor-alien-head-twist-gif-16399941",
  "https://i.kym-cdn.com/photos/images/original/001/890/995/e1c.gif",
  "https://tenor.com/view/among-us-kill-purple-kills-cyan-purple-killer-gentleman-died-man-gif-19422877",
  "https://tenor.com/view/patrick-star-imposter-among-us-kucing-menangis-spongebob-gif-18520418",
  "https://tenor.com/view/among-us-among-us-scary-eldritch-horror-horror-loop-gif-18542911",
  "https://tenor.com/view/pwned-dominating-gif-18280504",
  "https://tenor.com/view/stab-in-the-back-yeti-yetiapocalypse-kill-murder-gif-20607054",
  "https://tenor.com/view/among-us-gif-19009522",
];

module.exports.run = async (bot, message, args) => {
    // let picture = message.author.avatarURL;

    // return message.channel.send({file: {
    //     attachment: meeting,
    //     name:"meeting"
    // }})
    // message.channel.send(`${args[0].toUpperCase()} GOT KILLED!!`)
    // return message.channel.send(("Killed", {files: ["https://i.kym-cdn.com/photos/images/original/001/890/995/e1c.gif"]}))



     let x = Math.floor(Math.random() * kill.length - 1);
     if (x < 0) {
       x = x * -1;
     } else if (kill[x].includes("tenor")) {
         message.channel.send(`${args[0].toUpperCase()} GOT KILLED!!`);
       return message.channel.send(
         kill[Math.floor(Math.random() * kill.length - 1)]
       );
     } else {
         message.channel.send(`${args[0].toUpperCase()} GOT KILLED!!`);
       return message.channel.send(
         ("Killed",
         {
           files: [kill[Math.floor(Math.random() * kill.length - 1)]],
         })
       );
     }
}

module.exports.help ={
    name: "kill"
}