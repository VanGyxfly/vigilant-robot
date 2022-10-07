module.exports = {
  name: 'voicespam',
  aliases: ['vcspam'],
  owner: true,
  dsc: true,
  usage: '<amount> <name>',
  description: 'Spam Voice Channels',
  run: async(client, msg, args) => {
    let amount = args[0]
    let name = args.slice(1).join(" ") || 'ʀᴇx ᴄᴏᴍᴍᴜɴɪᴛʏタ';
    let limit = 500;

    if(!amount) return msg.reply(`**Error:** Please Input Amount 1 - ${limit}!`);
    if(isNaN(amount)) return msg.reply('**Error:** Use Number For The Amount!');
    if(amount > limit) return msg.reply(`**Error:** The Limit Amount Is ${limit}!`)

    msg.delete();
    msg.channel.send(`Spam Voice Channels With Name **${name}** As Much As **${amount}!**`).then((msg) => {
      for(let a=0; a < amount; a++){
        setTimeout(() => {
          msg.edit(`**Spam voice channels active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000)
        });
            
          msg.guild.channels.create(name, {
          type: 'GUILD_VOICE',
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ['VIEW_CHANNEL', 'CONNECT', 'SPEAK']
          }]
        });
        }, 3000)
      }
    }).catch()
  }
}