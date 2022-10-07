const fetch = require("node-fetch")
const { Client, MessageEmbed, Message} = require("discord.js")
const { prefix } = require('../../config.js')
const moment = require("moment");

module.exports = {
  name: 'players',
  aliases: ["player"],
  cooldowns: 5,
  usage: '<ip>:<port>',
  description: 'Get info Players Samp',
  run: async (client, msg, args) => {
      
      if (!args[0]) return msg.reply(`**Example:** ${prefix}players 12.34.56.78:7777`);
      

      const split = args.join(" ").split(":");
const ip = split[0];
const port = split[1] || `7777`;

       const json = await fetch(`http://anabellebot.online/API/sampquery?ip=${ip}&port=${port}`).then(r => r.json())
        if (json.response === "Something Went Wrong Please Check ip And port correcly or Please Try Again Later"){
          const em = new MessageEmbed()
          .setTitle(`**__${ip}:${port}__**`)
          .setDescription(`Server is offline!`)
          .setColor(`060101`)
          return msg.reply({ embeds: [em]})
        }

      if (json.response.isPlayersIngame > 20) return;
        
        const embed = new MessageEmbed()
            .setTitle(`**__${json.response.hostname}__**`)
          .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
          .addField(`**__${json.response.isPlayerOnline} • Players Online__**`, `\`\`\`[ID] | Name | Level | Ping\n${json.response.isPlayersIngame || "Too Many Players!"}\`\`\``)
          .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true}))
          .setTimestamp()
          .setColor(`060101`);
    msg.reply({embeds: [embed]});
  }
} 
