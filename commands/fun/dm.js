const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "dm",
  aliases: ['pm'],
  cooldowns: 5,
  description: 'Send Dm To User',
  usage: '<@user> <message>',
  run: async(client, msg, args) => {
    let user = msg.mentions.members.first() || msg.guild.members.cache.get(args[0])
    if(!user) return msg.reply(`User Not Found!`)
    if(!args.slice(1).join(" ")) return msg.reply(`<@${msg.author.id}> Please Input Messages!`)
    const embed = new MessageEmbed()
      .setAuthor(`Direct Messageタ`, msg.author.displayAvatarURL({ dynamic: true}))
      .setDescription(`${args.slice(1).join(" ")}\n`)
      .setColor(msg.guild.me.displayHexColor)
      .setFooter(`From: ${msg.author.tag}`);
    msg.delete();
    user.user.send({ embeds: [embed]}).catch(() => msg.channel.send(`Couldn't Send Dm To **${user.user.tag}**`)).then(() => msg.channel.send(`Succesfully Send Dm To **${user.user.tag}**`));
  }
}