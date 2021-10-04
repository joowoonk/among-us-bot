const axios  = require("axios");



console.log(process.env.APIKEY)

module.exports.run = async (bot, message, args) => {
  axios
    .get("g.tenor.com/v1/random?iu&key=" + process.env.APIKEY+"&limit=1")
    // https://g.tenor.com/v1/random?iu&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(res);
    })
    .catch((er) => console.error(er));
  
};

module.exports.help = {
  name: "iu",
};
