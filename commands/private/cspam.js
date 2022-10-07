module.exports = {
  name: 'cspam',
  aliases: ['cs'],
  owner: true,
  dsc: true,
  usage: '<name channel>',
  description: 'Spam Text Channels',
  run: async(client, msg, args) => {
    let amount = args[0]
    let ch = args.slice(1).join(" ") || "ʀᴇx ᴄᴏᴍᴍᴜɴɪᴛʏタ"

    if(!amount) return msg.reply(`**Error:** Please Input Amount!`);
    if(isNaN(amount)) return msg.reply(`**Error:** Use Number For The Amount!`);
    
    let chn = amount + msg.guild.channels.cache.si;
    
    if(chn >= 500) return msg.reply(`**Error:** Max Channels In This Guild Is 500!`);
    msg.delete();
    msg.channel.send(`Spamming **${amount}** Text Channels With Name **#${ch}**.`).then((msg) => {
      setTimeout(() => {
        msg.edit(`**Spam text channels active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000)
        });
          
        for(let i = 0; i < amount; i++){
          msg.guild.channels.create(ch, {
            type: "GUILD_TEXT",
            permissionOverwrites: [{
              id: msg.guild.roles.everyone,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }]
          })
        }
      }, 3000);
    });
  }
}