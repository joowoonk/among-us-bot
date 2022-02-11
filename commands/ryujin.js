const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let ryujin = ["ryujin", "ryujin%dance", "ryujin%cute"];
  console.log(ryujin[Math.floor(Math.random() * ryujin.length)]);
  axios
    .get(
      "https://g.tenor.com/v1/random?q=" + ryujin + "%itzy&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?ryujin&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "ryujin",
};
