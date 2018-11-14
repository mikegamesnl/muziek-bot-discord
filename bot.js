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
client.login(process.env.NTEyMTY3MTgzMzU1NDc4MDE3.Ds2O0w.u-gOwC1teUD1eb1agzHSTjjln4c);
