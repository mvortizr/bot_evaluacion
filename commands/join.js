const { performance } = require('perf_hooks');

module.exports = {
    name:'join',
    description: 'join voice channel',
    async execute(message,args){
        const {voice} = message.member

        if(!voice.channelID){
            message.reply('You must be in a voice channel')
            return;
        }

    
        const t0 = performance.now();
        try {
            await voice.channel.join()
            const t1 = performance.now();
            const miliseconds = t1-t0;
            console.log(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`);
            await message.channel.send(`Time taken ${miliseconds} miliseconds, ${miliseconds/1000} seconds`);
        } catch (e) {
            console.log(`ERROR ${e}`)
        }
        //voice.channel.leave()
    },   
}