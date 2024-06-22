const{Client, IntentsBitField, Client} = require('discord.js');

const Client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

Client.login('MTI1Mzc3MjE1NTA0NTU0NDAyNg.GHV1Cl.FEONAlB53wcPSv-LxFW1ko8BrYyC0vAq3Ydrsg');