const Commando = require('discord.js-commando');
const bot = new Commando.Client({commandPrefix: '&'});
const { Client, Attachment } = require('discord.js');
const superagent = require('superagent');

bot.on('ready', () => {
  bot.user.setStatus('available')
  bot.user.setPresence({
      game: {
          name: '$help , &help',
          type: "WATCHING",
          
      }
  });
}); 


bot.on('ready', () => {
  console.log('I am ready!');
});

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('meme', 'Meme');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  
  if (!channel) return;
  
  channel.send(`Welcome to the strip club my boy, ${member}`);
});

bot.on('message', message => {
    
    if (message.content === 'what is my avatar') {
     
      message.reply(message.author.avatarURL);
    }
  });
  
  bot.on('message', message =>
  {    
    if (message.content === 'whats rugz doing')
    {
      message.channel.send('probs playing osu like a fegget oof');
    }
  } );

  
bot.on('message', message =>
{
  if (message.content === 'where is griggz')
  {  
    message.channel.send('hes playing fortnite, do you even edit bro?');
  }
});

bot.on('message', message => {
     
      if (message.content === 'rip') {
         
          const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
          
          message.channel.send(attachment);
      }
  });

  bot.on('message', message => {
     
    if (message.content === 'BEN') {
       
        const attachment = new Attachment('https://i.imgur.com/OufT1OQ.png');
        
        message.channel.send(attachment);
    }
});

const Discord = require('discord.js');
bot.music = require("discord.js-musicbot-addon");
bot.music.start(bot, {
  youtubeKey: "AIzaSyDSs_xO7kBA2YlACBz26k0o7MfnTihss1M"
  ,botPrefix: '$'
});

bot.login(process.env.BOT_TOKEN);
