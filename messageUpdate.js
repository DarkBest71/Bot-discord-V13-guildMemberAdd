const { MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    run: (client, member, message) => {
        const channel = member.guild.channels.cache.get('ID Salon');

        member.roles.add("579261689111904306").then(console.log('Role added: ' + member.id));
        const embedNewMember = new MessageEmbed()
        .setColor('BLUE')
        .setDescription(`Bienvenue à ${member} sur ${member.guild.name}.`)
        .setAuthor({name: `Nouveau membre`, iconURL: `${member.guild.iconURL({dynamic: true})}`})
        .addField('Création du compte:', moment(member.user.createdAt).format('L'))
        .addField('A rejoint le:', moment(member.joinedAt).format('L'))
        .setFooter({text:` ${member.guild.memberCount} sur le serveur ! `})
        channel.send({embeds: [embedNewMember]})
    },
    name: 'guildMemberAdd'
} 
