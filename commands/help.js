
// console.log(color.length)
module.exports.run = async (bot, message, args) => {
  if (args.length === 1) {
    return;
  }
  return message.channel.send(
    `
    $python 
    $bts
    $changwook
    $dahyun
    $dave
    $eunwoo
    $exo
    $got7
    $hyunjin
    $hyunjin
    $jackson
    $jangkiyon
    $jichang
    $jihyo
    $jisoo
    $lalisa
    $lisa
    $jisoo
    $mark
    $mina
    $momo
    $nct
    $seungmin
    $straykids
    $tablo
    $tzuyu

    $color username
    $dance username
    $eject username
    $meeting
    $greetings
    $kill username
    $love username
    $sus username
    $vent username
  `
  );
};

module.exports.help = {
  name: "help",
};
