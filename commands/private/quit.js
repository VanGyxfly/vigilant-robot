module.exports = {
  name: 'quit',
  aliases: ['out', 'q'],
  owner: true,
  dsc: true,
  description: 'Remove Bot From Guild',
  run: async(client, msg, args) => {
    msg.delete();
    msg.channel.send(`**Goodbye @everyone, I will logout from this server!**`).then(() => msg.guild.leave()).catch(() => msg.channel.send(`Error logout from this server!`));
  }
}