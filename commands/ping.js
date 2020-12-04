module.exports = {
    name:'ping',
    description: 'test message',
    execute(message,args){
        message.channel.send('pong!!');
    }
}