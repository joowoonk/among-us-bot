const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let seungmin = ["seungmin", "seungmin%stray%kids", "seungmin%cute"];
  console.log(seungmin[Math.floor(Math.random() * seungmin.length)]);
  axios
    .get("https://g.tenor.com/v1/random?q=" + seungmin + "%kpop&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?seungmin&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "seungmin",
};
