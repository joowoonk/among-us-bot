const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let wonwoo = "wonwoo%seventeen";
  axios
    .get("https://g.tenor.com/v1/random?q=" + wonwoo + "%itzy&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?wonwoo&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "wonwoo",
};
