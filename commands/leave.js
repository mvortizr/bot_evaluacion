module.exports = {
    name:'leave',
    description: 'leave voice channel',
    async execute(message,args){
        const {voice} = message.member

        if(!voice.channelID){
            message.reply('You must be in a voice channel')
            return;
        }
        
        try {
            await voice.channel.leave()
        } catch (e) {
            console.log(`ERROR ${e}`)
        }

    },   
}