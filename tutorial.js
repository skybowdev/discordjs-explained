const Discord = require('discord.js'); //import in Discord.js
const client = new Discord.Client(); //assign the client, you can use bot or elsewhat

client.on('ready', () => { //function to be ran once our bot is ready
  console.log(`Logged in as ${client.user.tag}!`); //console log's the bot's name with its tag, eg: skybow#9999
});

client.on('message', msg => { //so we are async'ing msg so our code nows that msg is the message of our user
  if (msg.content === 'ping') { //checks the message sent to see if it says ping
    msg.reply('Pong!'); //replies with Pong! upon seeing that our text includes ping
  }
});

const embed = new Discord.MessageEmbed() //we created an embed here, now we need to fill it up
.setTitle('') //adds a title to the embed, make sure its a string
.setDescription('') //description of the embed
.setColor('') //use color codes such as #123ad or you can use regular colours like, RED or BLUE
.addField('field\'s title', 'the things inside the field') //fields are interesting... //pretty sure markdown is enabled doe
.addField('', '') //yes you can have multiple fields....
client.login('token'); //logs in to the bot

//fun fact: a \ is an escape chracter, you can use \' to add a ' smybol without closing the string.
//theres more to discord.js, this is just the basics explained briefly
