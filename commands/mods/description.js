module.exports = {
  name: "description",
  aliases: ['desc'],
  cooldowns: 10,
  userPerms: ['ADMINISTRATOR'],
  botPerms: ['ADMINISTRATOR'],
  usage: '<description>',
  description: "Change Description Server",
  run: async(client, msg, args) => {
    let desc = args.slice(0).join(" ");
    msg.delete();
    msg.guild.edit({
      description: desc
    }).then(() => msg.channel.send(`Successfully Rename Description Guild!`));
  }
}