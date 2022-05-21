const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  let hoshi = "hoshi%kpop";
  axios
    .get(
      "https://g.tenor.com/v1/random?q=" + "Hwang%In%Yeop" + "&key=LIVDSRZULELA"
    )
    // https://g.tenor.com/v1/random?hoshi&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[Math.floor(Math.random() * res.data.results.length)]
          .url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "hwanginyeop",
};
