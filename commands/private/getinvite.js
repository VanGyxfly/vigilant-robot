const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'getinvite',
  aliases: ['getinv', 'ginv'],
  owner: true,
  usage: '<id guild>',
  description: 'Get Invite Link',
  run: async(client, msg, args) => {
    let id = args.slice(0).join(" ");
    let guild = client.guilds.cache.find(guild => guild.id === id);
    let own = await guild.fetchOwner();
    if(!guild) return msg.reply(`Guild not found!`);
    
    let invite = await guild.channels.cache.filter(c => c.type === 'GUILD_TEXT')
    .first()
    .createInvite({ maxAge: 0, maxUses: 0 });
    
    if(!args[0]) return msg.reply(`Please type id guild!`);
    if(!invite) return msg.reply(`I don't have permissions!`)

    const embed = new MessageEmbed()
    .setAuthor(`GET INVITE`, guild.iconURL({ dynamic: true }))
    .addField(`**__Owner:__**`, `${own.user.tag} _(ID: ${own.id})_`)
    .addField(`**__Server:__**`, `${guild.name} _(ID: ${guild.id})_`)
    .addField(`**__Members:__**`, `${guild.memberCount}`)
    .addField(`**__Invite Link:__**`, `[Click Here!](${invite.url})`)
    .setTimestamp()
    .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
    .setColor(`060101`)
    msg.reply({ embeds: [embed]})
  }
}