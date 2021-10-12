const axios = require("axios");
let momo = ["momo%twice", "momo%dance", "momo%cute"]
console.log(momo[Math.floor(Math.random() * momo.length)]);

module.exports.run = async (bot, message, args) => {
  axios
    .get("https://g.tenor.com/v1/random?q="+ momo[Math.floor(Math.random() * momo.length)] +"&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?momo&key=LIVDSRZULELA&limit=1
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
  name: "momo",
};
