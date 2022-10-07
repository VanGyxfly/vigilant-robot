const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'unban',
  aliases: ['ub'],
  cooldowns: 10,
  userPerms: ['ADMINISTRATOR'],
  botPerms: ['ADMINISTRATOR'],
  usage: '<userid>',
  description: 'Unbanning Member',
  run: async(client, msg, args) => {
    const uid = args[0];
    const Banned = await msg.guild.bans.fetch();
    const user = Banned.get(uid);

    if(!args[0]) return msg.reply(`Please type id for unban user!`);

    if(!user) return msg.reply(`Unknown user!`);
    
    await msg.guild.members.unban(user).then(user => {
      const unban = new MessageEmbed()
      .setAuthor(`UNBAN MEMBER`)
        .setTitle(`**━━━━━━━━**`)
      .setDescription(`Username: ${user.tag}\nUser ID: ${user.id}`)
      .setTimestamp()
      .setFooter(`By: ${msg.author.tag}`, msg.author.displayAvatarURL({
        dynamic: true}))
      return msg.reply({ embeds: [unban]});
    }).catch(() => msg.reply(`User not found!`));
  }
}