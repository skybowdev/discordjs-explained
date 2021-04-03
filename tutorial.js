const Discord = require('discord.js'); //import in Discord.js
const client = new Discord.Client(); //assign the client, you can use bot or elsewhat

client.on('ready', () => { //function to be ran once our bot is ready
  console.log(`Logged in as ${client.user.tag}!`); //console log's the bot's name with its tag, eg: skybow#9999
});

client.on('message', msg => { // Listening for a message
  if (msg.content === 'ping') { // checks the content of the message, if it matches 'ping'
    msg.reply('Pong!'); // Replies the message with 'Pong!'. Note: this doesn't make an inline reply.
  }
});

const embed = new Discord.MessageEmbed() // we initialized an empty embed object
.setTitle('Example Title') //adds a title to the embed, make sure its a string
.setDescription('Example Description') //description of the embed
.setColor('RED') //use color codes such as #123ad or you can use regular colours like, RED or BLUE
.addField('field\'s title', 'the things inside the field') //fields are interesting... //pretty sure markdown is enabled doe
.addField('another field', 'fields value') //yes you can have multiple fields....
client.login('token'); //logs in to the bot. warning: don't hardcode the token

//fun fact: a \ is an escape chracter, you can use \' to add a ' smybol without closing the string.
//theres more to discord.js, this is just the basics explained briefly
