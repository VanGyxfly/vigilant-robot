module.exports = {
  name: 'massdm',
  aliases: ['mdm'],
  owner: true,
  usage: '<@user/id> <amount> <message>',
  description: 'Spam Dm To User',
  run: async(client, msg, args) => {
    let member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]);
    let amount = args[1];
    let ms = args.slice(2).join(" ");
    if(!args[0]) return msg.reply(`Please tag member/id!`)
    if(!member) return msg.reply(`Member not found!`)
    if(!amount) return msg.reply(`Please input amount!`);
    if(isNaN(amount)) return msg.reply(`Type amount 1-100!`);
    if(amount > 100) return msg.reply(`Limit amount is 100!`)
    if(!ms) return msg.reply(`Please type message!`);

    msg.delete();
    msg.channel.send(`**Mass dm active!**`).then(msg => {
      setTimeout(() => {
        for(let i = 0; i < amount; i++){
          member.user.send(`${ms}`).catch(() => msg.edit(`Can't dm to **${member.user.tag}**`)).then(() => msg.edit(`Succesfully mass dm to **${member.user.tag}** as much as **${amount}**`));
        };
      }, 3000);
    });
  }
}