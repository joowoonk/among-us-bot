const axios = require("axios");


module.exports.run = async (bot, message, args) => {
  axios
    .get(
      "https://g.tenor.com/v1/random?q=jackson%wang&key=LIVDSRZULELA"
    )
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
  name: "jackson",
};
