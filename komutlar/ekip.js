const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**》 Ekip 《**", `\n**Yapımcı:** Metehan Salman \n**Geliştirici:** Metehan Salman` )

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['ekip, EKİP'],
  permLevel: 0
};

exports.help = {
  name: 'ekip',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcı'
};