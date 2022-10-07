const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'invite',
  aliases: ['inv'],
  cooldowns: 5,
  description: 'Send Link Invite Bot',
  run: async(client, msg, args) => {
    msg.delete();
    
    const embed = new MessageEmbed()
    .setTitle(`**Invite ${client.user.username}**`)
    .setDescription(`**Click Blue Text To Invite Me**
**[[Here]](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`)
    .setFooter(`By: ${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true}))
    .setTimestamp()
    .setColor(`060101`)
    msg.channel.send({ embeds: [embed]});
  }
}