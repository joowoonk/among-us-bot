const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let tzuyu = ["tzuyu%twice", "tzuyu%dance", "tzuyu%cute"];
  console.log(tzuyu[Math.floor(Math.random() * tzuyu.length)]);
  axios
    .get("https://g.tenor.com/v1/random?q="+ tzuyu + "&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?momo&key=LIVDSRZULELA&limit=1
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
  name: "tzuyu",
};
