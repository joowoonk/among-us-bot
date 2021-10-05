const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  axios
    .get(
      "https://g.tenor.com/v1/random?q=ji%chang%wook&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?iu&key=MT4ENK2ABIGZ&limit=1
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
  name: "jichangwook",
};
