const Discord = require('discord.js')
require('dotenv').config();
const client = new Discord.Client();

const prefix = '!'

client.once('ready', ()=> {
    console.log('Bot is ready');
});

client.on('message', message => {
    //return if doesn't start with prefix or it is made by the bot
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
})



client.login(process.env.BOT_TOKEN)