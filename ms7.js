
const Discord = require('discord.js');
const client = new Discord.Client();
			client   = new Discord.Client()

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.author.id == 224875948372262912) {
		if (message.content === 'مسح') {
			message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
		} else if (message.content.match(/\/clear \d+/)) {
			var limit = message.content.match(/\/clear (\d+)/)[1] + 1;
			message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
		}
	} else {

	}
});

client.login(process.env.BOT_TOKEN);
