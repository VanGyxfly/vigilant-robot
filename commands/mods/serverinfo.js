const moment = require('moment');
const {
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'serverinfo',
  aliases: ['si'],
  cooldowns: 10,
  description: 'Show Info Server',
  run: async(client, msg, args) => {
    //Boost 
    var boost;
    if(msg.guild.premiumTier === `NONE`){
      boost = `Level 0`;
    }
    if(msg.guild.premiumTier === `TIER_1`){
      boost = `Level 1`;
    }
    if(msg.guild.premiumTier === `TIER_2`){
      boost = `Level 2`;
    }
    if(msg.guild.premiumTier === `TIER_3`){
      boost = `Level 3`;
    }
    //CREATED AT
    const createdAt = moment(msg.guild.createdAt);
    const tanggal = createdAt.format('dddd, DD MMMM YYYY, HH:mm') + ' _(' + createdAt.fromNow() + ')_';
    //VANITY URL
    var vanity;
    msg.guild.fetchVanityData().then(inv => {
      vanity = inv.code
    }).catch(() => console.error)
    //GUILD OWNER
    const gown = await msg.guild.fetchOwner();
    //Roles
    const roles = msg.guild.roles.cache.filter(roles => roles.id !== msg.guild.id).map(roles => `${roles.toString()}`).join(", ");
    
    const embed = new MessageEmbed()
    .setAuthor(`${msg.guild.name} Information`, client.user.displayAvatarURL({
      dynamic: true
    }))
    .addField(`<:emoji_79:967530259480207390> **__About:__**`, `> **Owner:** ${gown.user.tag} (${gown})
> **Name:** ${msg.guild.name}
> **ID:** ${msg.guild.id}
> **Members:** ${msg.guild.memberCount}
> **Boost Status:** ${msg.guild.premiumSubscriptionCount || `0`} Boost _(${boost})_
> **Verification:** ${msg.guild.verificationLevel}
> **Created At:** ${tanggal}`)
    .addField(`<:emoji_92:967530596391850105> **__Channels Info:__**`, `> **Channels:** ${msg.guild.channels.cache.size}
> **Text Channels:** ${msg.guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size}
> **Voice Channels:** ${msg.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}
> **Category Channels:** ${msg.guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size}`)
    .addField(`<:emoji_82:967530322805784606> **__Emojis Info:__**`, `> **Emojis:** ${msg.guild.emojis.cache.size}
> **Regular Emojis:** ${msg.guild.emojis.cache.filter(e => !e.animated).size}
> **Animated Emojis:** ${msg.guild.emojis.cache.filter(e => e.animated).size}`)
    .addField(`<:emoji_91:967530575181258792> **__Roles [${msg.guild.roles.cache.size}]:__**`, `> ${roles}`)
    .setFooter(`〢${msg.author.tag}`, msg.author.displayAvatarURL({
      dynamic: true
    }))
    .setThumbnail(msg.guild.iconURL({
      dynamic: true
    }))
    .setColor(`060101`)
    .setTimestamp()
    msg.reply({ embeds: [embed]});
  }
}