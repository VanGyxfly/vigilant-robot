const commands = require("../Data/commands.js");
const aliases = require("../Data/aliases.js");
const categories = require("../Data/categories.js");
const cooldown = require("../Data/cooldown.js");
const Command = require("./Command.js");
const ms = require("ms");

class Util {
	constructor() {

	}

	generateHelpCommand(cooldown, category) {
		return new Command({
			name: "help",
			description: "A command that show you all commands.",
			aliases: ["h", "commands", "cmds"],
			cooldown: cooldown ? cooldown : 5,
			category: category ? category : "help",
			execute: async (message, args, client) => {
				let modules = categories;

				message.reply(`
**commands [${commands.size}]** list for **${client.user.tag}**
**prefix** is \`${client.opt.prefix}\`

${modules.map(mod => `**${mod.name}**\n\`\`\`nim\n${mod.cmds.map(cmd => ` - ${cmd.name}`).join("\n")}\`\`\``).join("\n")}

**- Powered by djst-client -**
`)
			}
		})
	}

	async initButtons(client) {
		client.on("interactionCreate", (interaction) => {
			let isButton = interaction.isButton();

			if (!isButton) return;
			client.emit("buttonClicked", interaction);
		})
	}

	async initCommands(client) {
		let prefix = client.opt.prefix;
		if (!prefix) throw TypeError("Cannot initialize commands because no Prefix provided.");
		if (prefix.length >= 6) throw TypeError("Prefix length cannot be more than 6.");
		client.on("messageCreate", async message => {
			if (client.opt.ignoreBot) {
				if (message.author.bot) return;
			}

			if (!message.content.startsWith(prefix)) return;

			let args = message.content.slice(prefix.length).trim().split(/ +/g);
			let cmd = args.shift().toLowerCase();

			let command = commands.get(cmd) || commands.get(aliases.get(cmd))
			if (!command) return;

			let checkCooldown = cooldown.get(`${command.name}-${message.author.id}`);

			if (checkCooldown) {
				let leftTime = Date.now() - checkCooldown;
				let cd = ms(command.cooldown * 1000 - leftTime);
				let cdMsg = client.opt.messages.cooldown.replace(/{command}/g, command.name).replace(/{cdTime}/g, cd);
				return message.reply(cdMsg);
			} else {
				cooldown.set(`${command.name}-${message.author.id}`, Date.now());
				setTimeout(() => {
					cooldown.delete(`${command.name}-${message.author.id}`);
				}, command.cooldown * 1000)
			}

			command.execute(message, args, client);
		});
	}
}

module.exports = Util;