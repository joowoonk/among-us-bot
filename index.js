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
        bot.user.setActivity(
          "Commad Lines: $bts $changwook $dahyun $dave $eunwoo $exo $got7 $hyunjin $hyunjin $jackson $jangkiyon $jichang $jihyo $jisoo $lalisa $lisa $jisoo $macho $mark $mina $momo $nct $ryujin $seungmin $straykids $tablo $tzuyu $wonwoo $color $dance username $eject username $meeting $greetings $kill username $love username $sus username $vent username"
        );
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
let letter = ["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
bot.on("message", (message, args) => {
  if (message.content.includes("hello")) {
   return message.channel.send(`Hello, <@${message.member.id}>, I'm your friendly bot!`);
  } else if (message.content.includes("hallo")) {
    return message.channel.send(`Hello, <@${message.member.id}>, I'm your friendly bot!`);

    // Gute Nacht, dein freundlicher Bot wird dich vermissen
   } else if (message.content.includes("morten")) {
    return message.channel.send(`Morning <@${message.member.id}>!`);

    
   }else if (message.content.includes("night")) {
     return message.channel.send(
       `Gute Nacht, dein freundlicher Bot wird dich vermissen <@${message.member.id}>!`
     );
   } else if (message.content.includes("fuck")) {
     return message.channel.send(
       `Lord have mercy on your soul, <@${message.member.id}>!`
     );
   } else if (message.content.includes("FUCK")) {
     return message.channel.send(
       `Lord have mercy on your soul, <@${message.member.id}>!`
     );
   } else if (message.content.includes("Fuck")) {
     return message.channel.send(
       `Lord have mercy on your soul, <@${message.member.id}>!`
     );
   } else if (message.content.includes("cunt")) {
     return message.channel.send(
       `Theotokos is watching you, <@${message.member.id}>!`
     );
   } else if (message.content.includes("bitch")) {
     return message.channel.send(
       `Your mother is also female, <@${message.member.id}>!`
     );
   } else if (message.content.includes("shit")) {
     return message.channel.send(
       `Literally your mouth is producing that substance from your mouth, <@${message.member.id}>!`
     );
   } else if (message.content.includes("damn")) {
     return message.channel.send(
       `Talia is watching you, <@${message.member.id}>!`
     );
   } else if (message.content.includes("Damn")) {
     return message.channel.send(
       `Talia is watching you, <@${message.member.id}>!`
     );
   } else if (message.content.includes("Shit")) {
     return message.channel.send(
       `Literally your mouth is producing that substance from your mouth, <@${message.member.id}>!`
     );
   } else if (message.content.includes("gay")) {
     return message.channel.send("https://tenor.com/view/gay-shit-its-gay-why-are-you-gay-gei-martin-ssempa-gif-17649144");
   } else if (message.content.includes("GAY")) {
    return message.channel.send(
      "https://tenor.com/view/gay-shit-its-gay-why-are-you-gay-gei-martin-ssempa-gif-17649144"
    );
   } else if (message.content.includes(" ass")) {
     return message.channel.send(`Don't be butt, <@${message.member.id}>!`);
   } else if (message.content.includes("ASS")) {
     return message.channel.send(`Don't be butt, <@${message.member.id}>!`);
   } else if (message.content.includes("crap")) {
     return message.channel.send(
       `Literally your mouth is producing that substance from your mouth, <@${message.member.id}>!`
     );
   } else if (message.content.includes("shut up")) {
     return message.channel.send(`Be nice my friend, <@${message.member.id}>!`);
   } else if (message.content.includes("SHUT")) {
     return message.channel.send(`Be nice my friend, <@${message.member.id}>!`);
   } else if (message.content.includes("stfu")) {
     return message.channel.send(`That's not nice, <@${message.member.id}>!`);
   } else if (message.content.includes("STFU")) {
     return message.channel.send(`That's not nice, <@${message.member.id}>!`);
   } else if (message.content.includes("play among us")) {
     return message.channel.send(
       `Me me! I will play with you, <@${message.member.id}>! ${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}`
     );
   } else if (message.content.includes("playing among us")) {
     return message.channel.send(
       `Me me! I will play with you, <@${message.member.id}>! ${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}${
         letter[Math.floor(Math.random() * 26)]
       }${letter[Math.floor(Math.random() * 26)]}`
     );
   }
});


bot.on("message", async (message, args) => {
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
      
      return message.channel.send("What do you want me to talk about?");
      
    }  else if (message.content.startsWith(`${config.prefix}goodnight`)) {
      
      return message.channel.send("GOOD NIGHT! SWEET DREAM!!~");
      
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
