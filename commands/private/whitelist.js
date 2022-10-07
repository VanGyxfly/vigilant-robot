const {
  MessageEmbed
} = require('discord.js');

const {
  dsc,
  prefix
} = require('../../config.js');

const {
  owner
} = require('../../owner.json')

module.exports = {
  name: 'whitelist',
  aliases: ['wl'],
  owner: true,
  description: 'Show whitelist bot',
  run: async(client, msg, args) => {
    let us = ``;
    client.users.cache.forEach(u => {
      if(owner.includes(u.id)){
        us = us.concat(`${owner ? `- **${u.tag}**\n` : `None`}`);
      }
    });
    let dc = ``;
    client.guilds.cache.forEach(g => {
      if(dsc.includes(g.id)){
        dc = dc.concat(`${dsc ? `- **${g.name}**\n` : `None`}`);
      }
    });

    if(args[0] === 'user'){
      const user = new MessageEmbed()
      .setTitle(`**WHITELIST INFO**`)
      .addField(`${owner.length}〢**__Whitelist Users:__**`, us)
      .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(`060101`)
      msg.reply({ embeds: [user]})
    }
    if(args[0] === 'dc'){
      const serv = new MessageEmbed()
      .setTitle(`**WHITELIST INFO**`)
      .addField(`${dsc.length}〢**__Whitelist Servers:__**`, dc)
      .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(`060101`)
      msg.reply({ embeds: [serv]})
    }

    if(!args[0]){
      const embed = new MessageEmbed()
      .setTitle(`**WHITELIST INFO**`)
      .setDescription(`${prefix}whitelist user\n${prefix}whitelist dc`)
      .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
      .setColor(`060101`)
      .setTimestamp()
      msg.reply({ embeds: [embed]}).then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
    }
  }
}