const {Client,Collection} = require('discord.js');
require('dotenv').config();
const client = new Client();
const fs = require('fs');

const prefix = '!'

// setting commands
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);
}


client.once('ready', ()=> {
    console.log('Bot is ready');
});


client.on('message', message => {
    
    //return if doesn't start with prefix or it is made by the bot
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //commands
    if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
    } else if (command == 'join'){
        client.commands.get('join').execute(message,args);
    } else if (command == 'leave'){
        client.commands.get('leave').execute(message,args);
    } else if (command == 'send') {
        client.commands.get('send').execute(message,args);
    }
});


client.login(process.env.BOT_TOKEN)
