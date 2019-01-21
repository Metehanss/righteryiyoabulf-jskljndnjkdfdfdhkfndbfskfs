const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Öldüreceğimi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Öldürdü Ruhuna Fatiha Bi Fatiha Okurum :disappointed: **')
        .setImage(`https://media.giphy.com/media/rV9hxbEtfsS52/source.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'İstediğiniz Kişiyi Öldürürsünüz.',
  usage: 'öldür'
};