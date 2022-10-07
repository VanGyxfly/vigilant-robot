const DJST = require("../main.js");
const client = new DJST.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	prefix: "v/",
	initCommands: true
});

client.generateHelpCommand();
client.createCommand({
	name: "test",
	description: "hahahahah",
	execute: async (message, args, client) => {
		const btn = new DJST.MessageButton()
		.setCustomId("tombol-ku")
		.setEmoji("🎉")
		.setLabel("Hello World!")
		.setStyle("SUCCESS")

		const btnLink = new DJST.MessageButton()
		.setEmoji("🎉")
		.setLabel("VinsDev website!")
		.setStyle("LINK")
		.setURL("https://vinsdev.xyz")

		let row = new DJST.MessageActionRow()
		.addComponents(btn, btnLink)

		message.channel.send({
			content: "klik tombolnya!",
			components: [row]
		})
	}
})

client.on("buttonClicked", (user) => {
	if (user.customId === "tombol-ku") {
		const Embed = new DJST.MessageEmbed()
		.setAuthor("Hello World!")
		user.reply({
			content: "Hello World",
			embeds: [Embed],
			ephemeral: true
		})
	}
})

client.on("ready", () => {

	client.setStatus({
		status: "idle",
		name: "discord.js-touch (framework)",
		type: "LISTENING"
	})

	console.log("ready");
})
client.login("token")