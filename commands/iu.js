const axios  = require("axios");




module.exports.run = async (bot, message, args) => {
    let iu = ["iu%twice", "iu%dance", "iu%cute"];
    console.log(iu[Math.floor(Math.random() * iu.length)]);
  axios
    .get("https://g.tenor.com/v1/random?q="+iu+"&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?iu&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length)
        ].url
      );
    })
    .catch((er) => console.error(er)); 
    };
module.exports.help = {
  name: "iu",
};
