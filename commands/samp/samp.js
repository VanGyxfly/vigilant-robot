const fetch = require("node-fetch")
const { Client, MessageEmbed, Message} = require("discord.js")
const moment = require("moment");
const {
  prefix
} = require('../../config.js')

module.exports = {
  name: 'samp',
  aliases: ["samps"],
  usage: '<ip>:<port>',
  cooldowns: 3,
  description: 'Get info Samp',
  run: async (client, msg, args) => {
      
      if (!args[0]) return msg.reply(`**Example:** ${prefix}samp 12.34.56.78:7777`);
      

      const split = args.join(" ").split(":");
const ip = split[0];
const port = split[1] || `7777`;

       const json = await fetch(`http://anabellebot.online/API/sampquery?ip=${ip}&port=${port}`).then(r => r.json())
        if (json.response === "Something Went Wrong Please Check ip And port correcly or Please Try Again Later") {
          const em = new MessageEmbed()
          .setTitle(`**__${ip}:${port}__**`)
          .setDescription(`Server is offline!`)
          .setColor(`060101`)
          return msg.reply({ embeds: [em]});
        }

      if (json.response.isPlayersIngame > 10) return;
      
      var pw = {
            "true": "Enable",
            "false": "Disable"
        };

      
        
        const embed = new MessageEmbed()
            .setTitle(`**__${json.response.hostname}__**`)
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .addField("**__Gamemode__**", `${json.response.gamemode}`)
          .addField("**__Server Ip:Port__**",`${ip}:${port}`) 
          .addField("**__Language__**", `${json.response.language}`)
          .addField("**__Players Online__**", `${json.response.isPlayerOnline}/${json.response.maxplayers}`)
          .addField("**__Max Players__**", `${json.response.maxplayers}`)
          .addField("**__Map Name__**", `${json.response.rule.mapname}`)
          .addField("**__Password__**", `${json.response.passworded}`)
          .addField("**__Version__**", `${json.response.rule.version}`)
          .addField("**__Weather__**", `${json.response.rule.weather}`)
          .addField("**__Website__**", `[${json.response.rule.weburl}](https://${json.response.rule.weburl})`)
          .addField(`**__${json.response.isPlayerOnline}・Players Online__**`, `\`\`\`[ID] | Name | Level | Ping |\n${json.response.isPlayersIngame || "Too Many Players!"}\`\`\``)
          .setFooter(`〢`+msg.author.tag, msg.author.displayAvatarURL({dynamic:true}))
          .setTimestamp()
          .setColor(`060101`)
    msg.reply({ embeds: [embed]})
  }
}