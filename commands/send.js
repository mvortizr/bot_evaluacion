const {MessageAttachment} = require('discord.js');
const { performance } = require('perf_hooks');

module.exports = {
    name:'send',
    description: 'send attachment to channel',
    async execute(message,args){
       
        try {
            const attachment = await new MessageAttachment('https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-discord.png?width=270');
            console.log('attachment cargado')
            const t0 = performance.now();
            await message.channel.send(attachment);
            const t1 = performance.now();
            const miliseconds = t1-t0;
            console.log(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`)
            console.log(`Attachment size ${attachment.size} bytes`)
            await message.channel.send(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`);
            await message.channel.send(`Attachment size ${attachment.size} bytes`);
        } catch (e) {
            console.log(`ERROR ${e}`)
        }

    },   
}