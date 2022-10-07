const {
  MessageEmbed
} = require('discord.js');

const {
  prefix
} = require('../../config.js');
//const os = require('os');
const moment = require('moment');

const {
  mem,
  cpu, 
  os
} = require('node-os-utils');

module.exports = {
  name: 'infobot',
  aliases: ['botinfo', 'info'],
  cooldowns: 5,
  description: 'Show info bot',
  run: async(client, msg, args) => {
    require("moment-duration-format");
    const uptime = moment.duration(client.uptime).format(`D [days], H [hrs], m [mins], s [secs]`);
    
    const s = client.guilds.cache.map(guild => guild);
    
    const {
      totalMemMb,
      usedMemMb
    } = await mem.info();
    
    const info = new MessageEmbed()
    .setAuthor(`${client.user.tag.toUpperCase()}`, client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .addField(`**__Owner:__**`, `タ RetZ.#2004`)
    .addField(`**__Client:__**`, `\`\`\`Prefix: ${prefix}\nServer's: ${s.length}\nCommand's: ${client.commands.size}\nPing: ${msg.client.ws.ping} ms\nUptime: ${uptime}\`\`\``)
    .addField(`**__Host:__**`, `\`\`\`OS: ${os.platform()}\nCores: ${cpu.count()}\nCPU Usage: ${await cpu.usage()}%\nRAM: ${totalMemMb} MB\nRAM Usage: ${usedMemMb} MB\`\`\``)
    .addField(`**__Discord:__**`, `[[Click Here]](https://discord.gg/5graRjabfP)`)
    .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(`060101`)
    msg.reply({ embeds: [info]});
  }
}
