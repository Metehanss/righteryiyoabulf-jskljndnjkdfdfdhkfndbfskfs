const db = require('quick.db')
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  if (!args[0]) return message.channel.send('<a:hata:527103359837011978> **Aç yada Kapat yazmalısın! Örnek: n!küfürengel aç - n!küfür aç**')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`kufur_${message.guild.id}`, 'Açık').then(i => {
  message.channel.send({embed: {
                author: {
                    name: "Küfür Engeli | Açıldı",
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `:white_check_mark: Küfür Engeli Başarıyla Açıldı. Yetkililer Hariç Kimse Küfür Edemez.`            
              }});
    })
  }
  if (args[0] == 'kapat') {
    db.set(`kufur_${message.guild.id}`, 'Kapalı').then(i => {
 message.channel.send({embed: {
                author: {
                    name: "Küfür Engeli | Kapatıldı",
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `:white_check_mark: Küfür Engeli Başarıyla Kapatıldı. Herkes Küfür Edebilir.`            
              }});
    })
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['küfür','küfürengel'],
  permLevel: 0
};
exports.help = {
  name: 'kufur',
  description: 'küfürengel',
  usage: 'küfürengel'
};