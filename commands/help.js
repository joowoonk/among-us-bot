const axios = require("axios");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(
    "```Commad Lines: \n$bts\n$changwook\n$dahyun\n$dave\n$eunwoo\n$exo\n$got7\n$HwangInYeop\n$hyunjin\n$hyunjin\n$jackson\n$jangkiyon\n$jichang\n$jihyo\n$jisoo\n$lalisa\n$lisa\n$jisoo\n$macho\n$mark\n$mina\n$momo\n$nct\n$ryujin\n$sana\n$seungmin\n$straykids\n$tablo\n$tzuyu\n$wonwoo\n$color\n\n$dance username \n$eject username\n$meeting\n$greetings\n$kill username\n$love username\n$sus username\n$vent username```"
  );
};
module.exports.help = {
  name: "help",
};
