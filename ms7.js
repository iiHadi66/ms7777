const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require ("fs")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.author.id == 224875948372262912) {
        if (message.content === 'مسح') {
            message.channel.fetchMessages().then(messages => messages.forEach(msg => msg.delete()));
        } else if (message.content.match(//clear \d+/)) {
            var limit = message.content.match(//clear (\d+)/)[1] + 1;
            message.channel.fetchMessages({limit: limit}).then(messages => messages.forEach(msg => msg.delete()));
        }
    } else {

    }
});

client.login(process.env.BOT_TOKEN);
