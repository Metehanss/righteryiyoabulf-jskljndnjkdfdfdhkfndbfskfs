const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
                '**Başlangıç**\n\n\n' + ' Hey merhaba ben Metehan botumuz şuanda ilerleme kat ediyor sende bize destek olmak için `+davet` yazman yeterli. \n \n \n Youtube kanal linki için `+youtube` yazın. \n\n\n Botun sitesini görmek için `+site` yazın. \n \n \n⬅  |  ➡ Bu Emojılere Tıklayarak Sayfayı Değiştirebilirsiniz',
              '**Ana Komutlar**\n\n\n' + '+**bilgi =** Bot hakkında bilgi verir. \n+**davet =** Botun davet linkini atar. \n+**havadurumu =** Hava durumunu gösterir. \n+**istatistik =** Botun istatistiklerini gösterir. \n+**kullanıcıara =** Yazdığınız kullanıcıyı ararsınız. \n+**kullanıcıbilgim =** Kullanıcı bilgilerinizi söyler. \n+**ping =** Botun pingini gösterir. \n+**randomşifre =** Size rastgele bir şifre söyler. \n+**roller =** Sunucudaki rolleri gösterir. \n+**sunucubilgi =** Sunucu hakkında bilgi verir. \n+**sunucuresmi =** Sunucunun resmini gönderir. \n+**tavsiye =** Yapımcıya tavsiyenizi iletirsiniz. \n+**yardım =** Bu menüyü gösterir. \n+**csgo =** Belirtilen kişinin csgo istatistiklerini gösterir. \n+**mc-skin =** Belirtilen kullanıcının skinini gösterir. \n+**steam-oyun =** Belirttiğiniz oyun adında bilgi verir. \n+**şikayet =** Kullanıcıyı şikayet edersiniz. \n+**avatar =** Avatarınızı gösterir. \n+**youtubeara =**Belirttiğiniz videoyu youtubede arar. \n+**rolinfo =** Belirtilen rol hakkında bilgi verir. \n+**yetkilerim =** Sunucudaki yetkilerinizi gösterir. \n+**yapımcı =** Yapımcıyı söyler. \n+**google =** Yazdığınız yazıyı googlede aratır. \n+**mesajküçült =** Yazdığınız mesajı küçültür. \n+**sunucular =** Botun ekli olduğu sunucuları gösterir. \n+**ekip =** Ekibi gösterir. \n+**youtube =** Yapımcının yt linkini atar. \n+**level =** Levelinizi gösterir. \n+**speedtest =** Botun intermetini test eder. \n+**site =** Botun sitesinin linkini verir.',
              '**Yapımcı Komutları**\n\n\n' + '+**eval =** Komut eklerken yapımcı komudu kontrol etmesine yarar. \n+**say =** Söylediğiniz yazıyı bot yazar. (sadece yapımcı) \n+**özelmesaj =** Özelden mesaj atar. \n+**fakemesaj =** Kullanıcı adına fake mesaj gönderir. (sadece yapımcı) ',
              '**Eğlence Komutları**\n\n\n' + '+**atatürk =** Rastgele bir Atatürk resmi veya gifi gönderir. \n+**danscı =** Yazdığınız 8 harflik yazıyı dans hareketleriyle yazar. \n+**emojiyazı =** Yazdığınız yazıyı emojilerle yazar. \n+**ters =** Yazdığınız yazıyı ters yazar. \n+**espri =** Bot espri yapar. \n+**inek =** Yazdığınız yazıyla ineği konuşturur. \n+**kahkaha =** Kahkaha atarsınız. \n+**koş =** Koşarsınız. \n+**mcödül =** Minecraft oyunundan size bir ödül verir. \n+**pixel =** Profilinize pixel efekti verir. \n+**randomşifre =** Size rastgele bir şifre verir. \n+**sigaraiç =** Sigara içersiniz. \n+**çayiç =** Çay içersiniz. \n+**çekiç =** İstediğiniz kişinin kafasına çekiç fırlatırsınız. \n+**şanslısayım =** Şanslı sayınızı gösterir.\n+**kedi =** Rastgele kedi fotoğrafı gönderir. \n+**köpek =** Rastgele köpek fotoğrafı gönderir. \n+**atam =** Profilinize Atatürk efekti katar. \n+**wasted =** Profilinize wasted efekti katar. \n+**sniper =** Profilinize sniper efekti katar. \n+**hacked =** Profilinize hacked efekti katar.\n+**stresçarkı =** Stres çarkı çevirirsiniz. \n+**winner =** Profilinize winner efekti verir. \n+**kasaaç =** Kasa açarsınız. \n+**aşkölçer =** Kullanıcılar arasındaki aşkı ölçer. \n+**aze =** Avatarınıza azeri efekti verir. \n+**trampet =** Trampet çalarsınız. \n+**sarıl =** Belirttiğiniz kullanıcıya sarılır. \n+**nitro =** Profilinize dc nitro efekti verir. \n+**romen =** Yazdığınız sayıyı romen rakamlarla yazar. \n+**slot =** Slot şans oyununu oynarsınız. \n+**urfa =** ACIKTINMI? \n+**balıktut =** Balık tutarsınız. \n+**içki =** Abartmadan içebilirsin. \n+**öldür =** Etiketlediğin kullanıcıyı öldür ama sakın yakalanma. \n+**banned =** Banned gifi atar. \n+**düello =** Etiketlediğiniz kullanıcı kabul ederse düello yaparsınız. \n+**coolresim =** Rastgele bir coolresim gönderir. ',
              '**Müzik Komutları**\n\n\n' + '+**oynat =** Belirlediğiniz müziği oynatır. \n+**geç =** Bir sonraki parçaya geçer. \n+**kapat =** Müziği kapatır. \n+**ses =** Ses seviyesini ayarlar. \n+**çalınan =**Çalınan müziği gösterir. \n+**durdur =** Müziği bekletir. \n+**devam =** Müziği devam ettirir. \n+**kuyruk =** Şarkı kuyruğunu gösterir. ',
              '**Yetkili Komutları**\n\n\n ' + '+**ban =** İstediğiniz kullanıcıyı banlar. \n+**kick =**istediğiniz kullanıcıyı kickler. \n+**rolver =** İstediğiniz kullanıcıya istediğiniz rolü verir. \n+**sustur =** İstediğiniz kullanıcıyı susturur. \n+**temizle =** İstediğiniz miktard mesaj siler. \n+**unban =** İstediğiniz kişinin banını kaldırır. \n+**uyar =** İstediğiniz kullanıcıyı uyarır. \n+**çekiliş =** Çekiliş yapar. \n+**sunucutanıt =** Sunucunuzu destek sunucusunda tanıtırsınız. \n+**slowmode =** Sunucunuz için yavaş modu açarsınız. \n+**reklam (aç / kapat) =** Sunucunuz için link engelini açar veya kapatırsınız. \n+**küfür (aç / kapat) =** Sunucunuz için küfür engelini açar veya kapatır. \n+**kurulum =** Bot için gerekli kanalları oluşturur. \n+**otorol =** Sunucunuz için otorol ayarlar. \n+**otorolsıfırla =** Otorolü sıfırlar. \n+**kapat-otoyazı =** Otoyazıyı kapatır. \n+**sa-as (aç/kapat) =** Sunucunuzda sa deyince as demesini açar/kapatır.',
              '**Sayaç **\n\n\n ' + '+**sayaç =** Sayaç ayarlamanızı sağlar. \n+**sayaç sıfırla =** Sayacı sıfırlamanızı sağlar. \n\n\n **NOT: Sayacın doğrı bir şekilde çalışması için `sayaç` adında bir kanal açmalısınız!**',
              '**Oyunlar **\n\n\n ' + '+**hafıza-oyunu =** Hafıza oyunu oynarsınız. \n+**blok-kırmaca =** Blok kırmaca oyunu oynarsınız. \n+**yılan-oyunu =** Yılan oyunu oynarsınız. \n\n **Yakında yenileri gelecek :)**',
              '**Yapımcım **\n\n\n ' + 'Yapımcım : **Metehan Salman** \nGeliştirici : **Metehan Salman**',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/avatars/510453815003054090/e764556833ceaa8099d38f8c1b6ea635.png?size=204')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
   message.react(":white_check_mark: ")
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};