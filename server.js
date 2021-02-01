const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '?test') {
    msg.reply('Complete!');
  }
});

client.login('NjI3NjY4MDEzMjcyNzkzMDg4.XY__Yw.zTUbva7RsTbfZrRgJlUqooszPKA');
