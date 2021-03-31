const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity("👨‍🚒", { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to: WATCHING ${presence.activities[0].name}`))
        .catch(console.error);; // 👨‍🚒 🚒
});

client.on("message", (message) => {
    if (message.content.includes("🔥")) {
        message.react('💧');
        message.react('💦');
    }
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.login(config.token);
isReady = true;
