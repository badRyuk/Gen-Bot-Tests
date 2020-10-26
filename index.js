const Discord = require('discord.js');

const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

const { oneLine } = require('common-tags');

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = ';';
//You can change the prefix if you like. It doesn't have to be ;


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}
// This will be continously sending you status of the bot in the terminal. If you don't want it just remove the next 3 lines
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
// Till here. Delete those 3 lines if you don't want it!
client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setStatus(`idle`)
});
/*
Exporting the Commands
*/
client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase() ||  client.aliases.get(commadName);

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
/*
Bot Mention
*/
client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if(message.channel.type === 'dm') return;
    if (message.mentions.has('760773438775492610')) { 
     const embed = new MessageEmbed()
        .setTitle('Hi, I\'m GenBot. Need help?')
        .setThumbnail('ADD A THUMBNAIL HERE')
        .setDescription(`You can see everything I can do by using the \`${prefix}help\` command. Remember commands won't work in DM.`)
        .addField('Support', oneLine`
          If you have questions, suggestions, feel free to contact a staff member!
        `)
        .addField('Thank You for using GenBot!', '<:Heart:764027864991268874>')
     // Here replace the entire emoji you get
        .setColor("RANDOM");
        message.channel.send(embed).then(sentEmbed => {
          // Here the bot reacts to its own message. So over here you need to insert an emoji ID so sentEmbed.react("<EMOJI_ID HERE>")
          // If you dont want it to react then remove this part .then(sentEmbed => { sentEmbed.react("765120683428282389")
          // If you dont know how to get emoji ID google it or send this in the server \<EMOJI>. Which will give you this result <EMOJI_NAME:EMOJI_ID>. Copy the emoji ID there and paste in the place specificed. 
          // However, if you do the same for an animated emoji you get <a:EMOJI_NAME:EMOJI_ID>. Still problems open up an issue in the server :D
    sentEmbed.react("765120683428282389")
    })
    };
});
client.login(process.env.DISCORD_TOKEN);
