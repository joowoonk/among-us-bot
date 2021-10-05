const axios = require("axios");


//   axios
//     .get("https://g.tenor.com/v1/random?q=changwook&key=LIVDSRZULELA&limit=1")
//     // https://g.tenor.com/v1/random?iu&key=LIVDSRZULELA&limit=1
//     .then((res) => {
//             console.log(res.data.results);
//       return message.channel.send(
      
//         res.data.results[
//           Math.floor(Math.random() * res.data.results.length - 1)
//         ].url
//       );
//     })
//     .catch((er) => console.error(er));


module.exports.run = async (bot, message, args) => {
  axios
    .get("https://g.tenor.com/v1/random?q=changwook&key=LIVDSRZULELA")
    // https://g.tenor.com/v1/random?iu&key=LIVDSRZULELA&limit=1
    .then((res) => {
      return message.channel.send(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ].url
      );
    })
    .catch((er) => console.error(er));
};
module.exports.help = {
  name: "changwook",
};
