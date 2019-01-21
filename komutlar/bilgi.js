const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Bot sürümü: v' + ayarlar.surum + ' Yapımcı: Metehan Salman  **Righter**\n\n_[Botu davet etmek için tıkla](https://discordapp.com/oauth2/authorize?client_id=525313553734041600&scope=bot&permissions=2146958847) \n\n_**Linkler:**_\n\n**ßȲ ǤṜĪ₦ƉĒṜ | Discord.js | Kod Paylaşım** sunucusunun davet linki: https://discord.gg/T87EcFh \nBotun davet linki: https://discordapp.com/oauth2/authorize?client_id=525313553734041600&scope=bot&permissions=2146958847 \n\n**:copyright: 2018 Righter**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
