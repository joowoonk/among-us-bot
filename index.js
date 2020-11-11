require("dotenv").config();

const discord = require("discord.js")

const config = require("./config.json")
const fs = require("fs")
const bot = new discord.Client({disableEveryone: true})
const queue = new Map();
const ytdl = require("ytdl-core");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`)
    // bot.user.setActivity("..Under Construction!");
    // if (config.activity.streaming == true){
        bot.user.setActivity("twitch => lizzyliesalo")
        // bot.user.setStatus("dnd")
    // }
})


bot.commands = new discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err)
    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if (jsfiles.length <= 0){
        console.log("There are no commands to load...");
    }
    console.log(`loading ${jsfiles.length} commands`)  
    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`)
        bot.commands.set(props.help.name, props)
    })
})

bot.on("message", async message => {
  try {
     if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
  
    const serverQueue = queue.get(message.guild.id);
  
    if (message.content.startsWith(`${config.prefix}play`)) {
      execute(message, serverQueue);
      return;
      
    } else if (message.content.startsWith(`${config.prefix}skip`)) {
      skip(message, serverQueue);
      return 
    }else if (message.content.startsWith(`${config.prefix}talk`)) {
      
      return message.channel.send("May the force be with you!~");;;
      
    }  else if (message.content.startsWith(`${config.prefix}goodnight`)) {
      
      return message.channel.send("GOOD NIGHT! SWEET DREAM!!~");;;
      
    }else if (message.content.startsWith(`${config.prefix}stop`)) {
      stop(message, serverQueue);
      return;
    } else {
      // message.channel.send("I dont know what you want");
      return;
    }
  } catch (error) {
    console.error(error)
  }
   
  });
  
  async function execute(message, serverQueue) {
    const args = message.content.split(" ");
  // console.log({args})
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }
  
    const songInfo = await ytdl.getInfo(args[1]);
  //   console.log({songInfo})
    const song = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
    };
  //   console.log(song)
    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };
  
      queue.set(message.guild.id, queueContruct);
  
      queueContruct.songs.push(song);
  
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }
  
  function skip(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }
  
  function stop(message, serverQueue) {
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
  
  function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }
  //   console.log(song)
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`Start playing: **${song.title}**`);
  }

  bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}, please read the rules and have fun!`);
  });
  let replies = ["Guten Morgen!", "Good Morning!", "좋은 아침입니다!"];

// Configure the randomizer that will pick a random integer from 0 to the length of the array; used for array index
let random = Math.floor(Math.random() * replies.length);
  
  bot.on("message", function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with /
    if (message.substring(0, 1) == ‘/’) {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // /Hi
            case 'morning':
                bot.sendMessage({
                    to: channelID,
                    message: replies[random]
                });
        break;
        // Just add any case commands if you want to..
         }
     }
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return

    let prefix = config.prefix
    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase()
    let args = messageArray.slice(1)

    if(!command.startsWith(prefix)) return;



    

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args)
})




bot.login(process.env.TOKEN);
