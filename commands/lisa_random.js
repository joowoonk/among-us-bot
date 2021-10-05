const axios = require("axios");


// axios
//   .get("https://g.tenor.com/v1/random?q=lisa%blackpink&key=LIVDSRZULELA")
//   // https://g.tenor.com/v1/random?lisarandom&key=LIVDSRZULELA&limit=1
//   .then((res) => {
//     console.log(
//       res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
//         .itemurl
//     );
//     return message.channel.send(res);
//   })
//   .catch((er) => console.error(er));
module.exports.run = async (bot, message, args) => {
  axios
    .get("https://g.tenor.com/v1/random?q=lisa%blackpink&key=MT4ENK2ABIGZ")
    // https://g.tenor.com/v1/random?lisarandom&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ].itemurl
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "lisa",
};
