const axios  = require("axios");



// console.log(iu[x])

module.exports.run = async (bot, message, args) => {
  axios
    .get("https://g.tenor.com/v1/random?iu" + process.env.APIKEY)
    .then((res) => {
      return message.channel.send(res);
    })
    .catch((er) => console.error(er));
  
};

module.exports.help = {
  name: "iu",
};
