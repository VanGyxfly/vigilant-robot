const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'announcement',
  aliases: ['announce'],
  cooldowns: 10,
  userPerms: ['ADMINISTRATOR'],
  botPerms: ['ADMINISTRATOR'],
  usage: '<#channel> <message>',
  description: 'Send Announcement Message',
  run: async(client, msg, args) => {
    let channel = msg.mentions.channels.first() || msg.guild.channels.cache.find(channel => channel.name === args[0]);
    
    let pesan = args.slice(1).join(" ");

    if(!channel) return msg.reply(`Please tag or type name channel!`);
    if(!pesan) return msg.reply('Please type messages for announcement!');

    msg.delete();
    msg.channel.send(`Succesfully send announcement to **__${channel}__**`).then(() => {
      const embed = new MessageEmbed()
      .setAuthor(`ANNOUNCEMENT`, msg.author.displayAvatarURL({ dynamic: true}))
      .setDescription(pesan)
      .setFooter(`By: ${msg.author.tag}`)
      .setColor(`060101`)
      .setTimestamp()
      channel.send({
        content: '||@everyone||',
        embeds: [embed]
      });
    }).catch(() => msg.channel.send(`Channel not found!`));
  }
};