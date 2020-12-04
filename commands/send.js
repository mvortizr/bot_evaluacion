const {MessageAttachment} = require('discord.js');
const { performance } = require('perf_hooks');
const  fs = require("fs"); //Load the filesystem module


module.exports = {
    name:'send',
    description: 'send attachment to channel',
    async execute(message,args){
       
        console.log('args',args);
        try {
            let attachment = await new MessageAttachment(`./filesToUpload/${args[0]}`);
            //obtener size
            const stats = fs.statSync(`./filesToUpload/${args[0]}`)
            attachment.size = stats.size
            console.log('attachment',attachment);
            console.log('attachment cargado')
            const t0 = performance.now();
            await message.channel.send(attachment);
            const t1 = performance.now();
            const miliseconds = t1-t0;
            console.log(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`)
            console.log(`Attachment size ${attachment.size} bytes`)
            await message.channel.send(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`);
            await message.channel.send(`Attachment size ${attachment.size} bytes, ${attachment.size/1000}Kb, ${attachment.size/1000000}MB`);
        } catch (e) {
            console.log(`ERROR ${e}`)
        }

    },   
}