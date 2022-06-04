const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../jsons/config.json");

module.exports = { run: async(client, oldMessage, newMessage ) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.channel.type === "dm") return;
    if(oldMessage.author.bot) return;
    if(oldMessage.content === newMessage.content) return;
    if(newMessage.content.length > 250) return;
    let channel = db.get("logs_channel_" + oldMessage.guild.id)
    if(client.channels.cache.get(channel)) { 
    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(client.user.avatarURL)
    .setAuthor({name: `Exécutée par ${oldMessage.author.username}`, iconURL: `${oldMessage.guild.iconURL({dynamic: true})}`})
    .setTitle(`Message modifié **ON** dans #${oldMessage.channel.name} :`)
    .addField("Ancien message :", oldMessage.content)
    .addField("Nouveau message :", newMessage.content)
    .setColor("#fc3c3c")
    .setFooter({text:"Modiffication du message part " + oldMessage.author.tag})
    .setTimestamp()
    return client.channels.cache.get(channel).send({ embeds: [embed] })
}
},
name: 'messageUpdate'
};