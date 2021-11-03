const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let mina = ["mina%twice", "mina%dance", "mina%cute"];
  console.log(mina[Math.floor(Math.random() * mina.length)]);
  axios
    .get("https://g.tenor.com/v1/random?q="+mina+"&key=LIVDSRZULELA")
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
  name: "mina",
};
