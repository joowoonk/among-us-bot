let dave = [
  "https://tenor.com/view/eitra-dave-santan-dave-streaham-gif-22025487",
  "https://tenor.com/view/eitra-topboy-netflix-modie-dave-gif-18970989",
  "https://tenor.com/view/santan-dave-no-words-mo-stack-steel-banglez-gif-16350509",
  "https://tenor.com/view/santan-dave-why-chickenshop-gif-20441175",
  "https://tenor.com/view/santan-dave-dave-uk-rap-london-rap-rap-gif-16350533",
  "https://tenor.com/view/nope-no-nike-skepta-giggs-gif-11087714",

  "https://tenor.com/view/funky-friday-santan-dave-roadman-gif-21206341",
  "https://media.gq-magazine.co.uk/photos/5d13a9db3b385369a70e9964/3:4/w_960,h_1280,c_limit/dave-hp-gq-26nov18_b.jpg",
  "https://cdn.discordapp.com/attachments/862786189769310219/869818698066694144/image0.jpg",
  "https://cdn.discordapp.com/attachments/862786189769310219/869818613908000778/image0.jpg",
  "https://i0.wp.com/rappers.money/wp-content/uploads/2018/03/Santan-Dave-e1522184922659.jpg?fit=515%2C527&ssl=1",
  "https://i.guim.co.uk/img/media/3668cffb7b2e92acd9b9b0ff09685c51552d4902/345_294_7406_4444/master/7406.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a578284dac816db21bf7b7be0216cea",
  "https://www.nme.com/wp-content/uploads/2021/03/Dave-Santan-Dave.jpg",
];
// console.log(bts[x])

module.exports.run = async (bot, message, args) => {
  let x = Math.floor(Math.random() * dave.length);
  if (x < 0) {
    x = x * -1;
  } else if (dave[x].includes("tenor")) {
    return message.channel.send(dave[x]);
  } else {
    return message.channel.send(("dance time", { files: [dave[x]] }));
  }
  // message.channel.send(`Lisa is love <3`)
};

module.exports.help = {
  name: "dave",
};
