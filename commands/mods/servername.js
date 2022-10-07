const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "servername",
  aliases: ["sn", "guildname", "gn"],
  cooldowns: 10,
  userPerms: ['ADMINISTRATOR'],
  botPerms: ['ADMINISTRATOR'],
  usage: "<name>",
  description: "Change Server Name",
  run: async(client, msg, args) => {
  let name = args.slice(0).join(" ");
    if(!name) return msg.reply(`Please Input Name!`);
    if(name.length < 2) return msg.reply(`Type At Least 2 Letters!`)
    let guild = msg.guild.name
    msg.delete();
      msg.guild.setName(`${name}`).then(() => msg.channel.send(`Successfully Change Name Server **${guild}** To **${name}**`) && console.log(`Log | Rename Server [${guild}] To [${name}]`));
  }
}