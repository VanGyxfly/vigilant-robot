module.exports = {
  name: 'spam',
  owner: true,
  dsc: false,
  usage: '<text>',
  description: 'Spam messages',
  run: async(client, msg, args) => {
    let cht = args.slice(1).join(" ");
    let amount = args[0];
    let limit = 10;
    
    if(!amount) return msg.reply("**Error:** Please Input Amount!")
    if(isNaN(amount)) return msg.reply("**Error:** Use Number For The Amount!")
    if(amount > limit) return msg.reply(`**Error:** Limit Spam Is ${limit}!`)
    if(!cht) return msg.channel.send("**Error:** Please Input Text!");
    
    msg.delete();
    msg.channel.send(`Spamming **${amount}** Chat!`).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 3000);
      })
    setTimeout(() => {
      async function spam() {
        for(let i = 0; i < amount; i++){
            msg.channel.send(cht);
          }
      }
      spam()
      msg.channel.send("**Done!**");
    }, 3000);
  }
}