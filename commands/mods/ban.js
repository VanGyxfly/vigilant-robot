const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'ban',
  aliases: ['b'],
  cooldowns: 10,
  userPerms: ['ADMINISTRATOR'],
  botPerms: ['ADMINISTRATOR'],
  usage: '<@member> <reason>',
  description: 'Banning Member',
  run: async(client, msg, args) => {
    let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(" ") || `None`;

    if(!member) return msg.reply(`Please tag/type user to ban!`);

    if(member == msg.member) return msg.reply(`You can't ban yourself!`)
  if(member.roles.highest.position >= msg.member.roles.highest.position) return msg.reply(`Can't ban user!`);

    if(member.roles.highest.position >= msg.guild.me.roles.highest.position) return msg.reply(`Can't ban user!`);

    member.ban({
      reason: reason
    }).then(member => {
      const ban = new MessageEmbed()
      .setAuthor(`BAN MEMBER`)
      .setTitle(`**━━━━━━━**`)
      .setDescription(`Username: ${member.user.tag}\nReason: ${reason}`)
      .setTimestamp()
      .setColor(`060101`)
      .setFooter(`By: ${msg.author.tag}`, msg.author.displayAvatarURL({
        dynamic: true
      }))
      msg.reply({ embeds: [ban]});
      member.send({ embeds: [ban]})
    }).catch((member) => {
      msg.reply(`Failed Ban **${member.user.tag}**`)
    })
  }
}