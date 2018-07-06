const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDYzNDE2NDA4Mjg2NjkxMzI4.DiFS4Q.sF7Yd_OIgUqzvGNklgO84newP5w);//where BOT_TOKEN is the token of our bot 
