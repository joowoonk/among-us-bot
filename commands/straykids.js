const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  axios
    .get("https://g.tenor.com/v1/random?q=straykids&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?iu&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ].url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "straykids",
};
