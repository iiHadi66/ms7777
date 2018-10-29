const fs = require ("fs")
const Discord  = require('discord.js'),
			client   = new Discord.Client()

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.author.id == 481830370854043668) {
		if (message.content === 'مسح') {
			message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
		} else if (message.content.match(/\/clear \d+/)) {
			message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
		}
	} else {

	}
});

client.login(process.env.BOT_TOKEN);
