const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('<a:hata:527103359837011978> **Aç yada Kapat yazmalısın! Örnek: n!linkengel aç - n!link aç**')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`reklam_${message.guild.id}`, 'Açık').then(i => {
 message.channel.send({embed: {
                author: {
                    name: "Reklam Engeli | Açıldı",
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `:white_check_mark: Reklam Engeli Başarıyla Açıldı. Yetkililer Hariç Hiç Kimse Link Atamaz.`            
              }});
    })
  }
  if (args[0] == 'kapat') {
    db.set(`reklam_${message.guild.id}`, 'Kapalı').then(i => {
 message.channel.send({embed: {
                author: {
                    name: "Reklam Engeli | Kapatıldı",
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `:white_check_mark: Reklam Engeli Başarıyla Kapatıldı. Herkes Link Atabilir.`            
              }});
    })
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['link','reklam','linkengel'],
  permLevel: 0
};
exports.help = {
  name: 'qweqweqwe',
  description: 'linkengel',
  usage: 'linkengel'
};