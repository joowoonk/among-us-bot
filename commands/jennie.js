const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let jennie = ["lajennie", "jennie", "jennie%dance", "jennie%cute"];
  console.log(jennie[Math.floor(Math.random() * jennie.length)]);
  axios
    .get(
      "https://g.tenor.com/v1/random?q=manoban%+" +
        jennie +
        "%blackpink&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?jennierandom&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "jennie",
};
