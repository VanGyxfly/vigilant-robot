#!/usr/bin/env node

const ncp = require('ncp').ncp;
const path = require("path")

ncp('C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\discord.js-touch\\program', 'djst-app', function (err) {
	if (err) {
		return console.error(err);
	}
	return console.log('\n- discord.js-touch application created! -\n\nyou can start the app by typing:\n1. cd djst-app\n2. npm install\n3. npm start\n\nedit the bot file in djst-app folder ');
});