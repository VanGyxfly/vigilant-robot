module.exports = {
  name: 'banall',
  aliases: ['ball'],
  owner: true,
  dsc: true,
  description: 'Ban All Members',
  run: async(client, msg, args) => {
    let member = msg.guild.members.cache.map(m => m.name);
    
    msg.delete();
    msg.channel.send(`Found **${member.length}** Members!`).then(msg => {
      setTimeout(() => {
        msg.edit(`**Ban all members active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000)
        });
        msg.guild.members.cache.forEach(mem => {
          mem.ban({ reason: `Destroyed by: ${msg.author.tag}`}).then(() => console.log(`\x1b[32mLog | ${mem.user.tag} Has banned!`)).catch(() => console.error(`\x1b[31mError | ${mem.user.tag} Failed to banned!`));
        });
      }, 3000);
    });
  }
}