
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.author.id == 495890792536211456) {
        if (message.content === 'مسح') {
            message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
            
    } else {

    }
});

client.login(process.env.BOT_TOKEN);
