const fs = require ("fs")
const Discord  = require('discord.js'),
			client   = new Discord.Client()

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.author.id == 495890792536211456) {
		if (message.content === 'clean') {
			message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
		} else if (message.content.match(/\/clear \d+/)) {
			var limit = message.content.match(/\/clear (\d+)/)[1] + 1;
			message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
		}
	} else {

	}
})

client.login(process.env.BOT_TOKEN);
