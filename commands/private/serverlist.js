const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "serverlist",
  aliases: ["ls", "list"],
  owner: true,
  description: 'Get All List Servers Where Bot Join',
  run: async(client, msg, args) => {
    let list = "";
    client.guilds.cache.forEach(guild => {
      list = list.concat(`**Guild Name:** ${guild.name}\n**Guild ID:** ${guild.id}\n**Members:** ${guild.memberCount}\n━━━━━━━━━━━━━━\n`);
    });
    const embed = new MessageEmbed()
    .setAuthor(`〢LIST SERVERタ`, client.user.displayAvatarURL({
      dynamic: true
    }))
    .setTitle(`**━━━━━━━━━━━━━━**`)
    .setDescription(list)
    .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({
      dynamic: true
    }))
    .setColor('060101')
    .setTimestamp()
    msg.reply({ embeds: [embed]});
  }
}