module.exports = {
  name: 'say',
  aliases: ['s'],
  cooldowns: 5,
  usage: '<text>',
  description: 'To Say Using Bot',
  run: async(client, msg, args) => {
    let text = args.slice(0).join(" ");

    if(!text) return msg.reply(`Please Type Something!`);

    msg.delete();
    msg.channel.send(text);
  }
}