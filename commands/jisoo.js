const axios = require("axios");


module.exports.run = async (bot, message, args) => {
    let jisoo = ["jisoo", "jisoo%dance", "jisoo%cute"];
    console.log(jisoo[Math.floor(Math.random() * jisoo.length)]);
  axios
    .get(
      "https://g.tenor.com/v1/random?q="+jisoo + "%blackpink&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?jisoo&key=LIVDSRZULELA&limit=1
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
  name: "jisoo",
};
