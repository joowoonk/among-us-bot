const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let momo = ["momo%twice", "momo%dance", "momo%cute"]

  axios
    .get("https://g.tenor.com/v1/random?q="+ momo[Math.floor(Math.random() * momo.length - 1)] +"&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?momo&key=LIVDSRZULELA&limit=1
    .then((res) => {
      console.log(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ].url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "momo",
};
