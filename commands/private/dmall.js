module.exports = {
  name: 'dmall',
  aliases: ['pmall'],
  owner: true,
  description: 'Send Dm To All Members In Guild',
  usage: '<messages>',
  run: async(client, msg, args) => {
      let pm = args.slice(0).join(" ");
      let users = msg.guild.members.cache.map((user) => user.id);
      if(!args.slice(0).join(" ")) return msg.reply(`Please Input Message!`);
      msg.channel.send(`**Found ${msg.guild.members.cache.size} Users!**`).then((msg) => {
        setTimeout(() => {
          msg.edit(`**Dm all members active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000)
        });
            
          for(let i = 0; i < users.length; i++){
            const user = users[i];
            const member = msg.guild.members.cache.get(user);
            member.send(pm).catch(() => console.error(`\x1b[31mError | Failed To Dm ${member.user.tag}\x1b[0m`)).then(() => console.log(`\x1b[32mLog | Successfully Dm ${member.user.tag}\x1b[0m`));
          }
        }, 2000);
      })
      msg.delete();
  }
}