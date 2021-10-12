const axios = require("axios");

module.exports.run = async (bot, message, args) => {
    let jihyo = ["jihyo", "jihyo%dance", "jihyo%cute"];
    console.log(jihyo[Math.floor(Math.random() * jihyo.length)]);
  axios
    .get("https://g.tenor.com/v1/random?q="+ jihyo + "%twice&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?momo&key=LIVDSRZULELA&limit=1
    .then((res) => {
      console.log(
        res.data.results
      );
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length)
        ].url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "jihyo",
};
