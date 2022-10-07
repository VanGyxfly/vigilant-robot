/*
	* powered by discord.js-touch
	* how to run the bot:
	* 1. open terminal in this directory
	* 2. type npm install
	* 3. type npm start
	* 4. done.
*/


/* 
	* make the '.env' file accessible
 */
require("dotenv").config()

const DJST = require("discord.js-touch");
const client = new DJST.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	prefix: "prefix/"
});

/*
	* generate 'prefix/help' command.
	* you can remove this if you want to make your own.
*/
client.generateHelpCommand();

/*
	* if in console show 'ready', its means your bot is online :D
*/
client.on("ready", () => {


	/*
		* set your bot status.
		* you can change this.
	*/
	client.setStatus({
		status: "idle",
		name: "discord.js-touch (framework)",
		type: "LISTENING"
	})

	console.log("ready");
})

client.createCommand({
	// category of the command
	category: "help",
	// command name
	name: "ping",
	// description of command
	description: "Just a example",
	// command cooldown (seconds)
	cooldown: 5,
	// execute the command when user type the command name
	execute: async (message, args, bot) => {
		message.channel.send(`hi, ${message.author.tag} :wave: \ni'm ${bot.user.username} :D`);
	}
})

/*
	* make the bot login
	* change the token in '.env' file
*/
client.login(process.env.TOKEN)