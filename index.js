const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

const prefix = "/";

Client.on("ready", () => {
    console.log("Bot is start")
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
//ping
    if(message.content === prefix + "ping"){
        message.reply("**Pong!, Un classique** :ping_pong:")
    }
//help
    else if(message.content === prefix + "help"){
       const embed = new Discord.MessageEmbed()
           .setColor("#000000")
           .setDescription("Voici la liste des commandes du bot ColorCommunity.")
           .setTitle("Commandes Du Bot")
           .setAuthor("créateur: Helfoxio#5906")
           .addField("__`/help`__", "Affiche le menu des commandes.")
           .addField("__`/ping`__", "Renvoie pong")
           .setTimestamp()
           .setFooter("Ce bot appartient à ColorCommunity tout droit réservé!.")
           .setThumbnail("https://imgur.com/eGLpHsr");         
           
    
        message.channel.send({ embeds: [embed]});
    
    }
  
});

Client.login("OTE0OTM2NzgwMDkwOTMzMjY5.YaUTRw.-UU599bR8436Uwgvn_2UBEec3GY")
