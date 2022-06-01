const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let rose = ["larose", "rose", "rose%dance", "rose%cute"];
  console.log(rose[Math.floor(Math.random() * rose.length)]);
  axios
    .get(
      "https://g.tenor.com/v1/random?q=manoban%+" +
        rose +
        "%blackpink&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?roserandom&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "rose",
};
