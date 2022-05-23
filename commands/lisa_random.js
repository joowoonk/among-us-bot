const axios = require("axios");


module.exports.run = async (bot, message, args) => {
    let lisa = ["lalisa", "lisa", "lisa%dance", "lisa%cute"];
    console.log(lisa[Math.floor(Math.random() * lisa.length)]);
    axios
      .get(
        "https://g.tenor.com/v1/random?q=manoban%+" +
          lisa +
          "%blackpink&key=LIVDSRZULELA"
      )
      // https://g.tenor.com/v1/random?lisarandom&key=LIVDSRZULELA&limit=1
      .then((res) => {
        return message.channel.send(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
            .url
        );
      })
      .catch((er) => console.error(er));
};
module.exports.help = {
  name: "lisa",
};
