const Discord = require("discord.js");
const client = new Discord.Client(); 

bot.login(process.env.token); 
usedCommandRecently4 = new Set();

client.on("ready", () => {
  console.log("GenBot is now online");

  client.user.setPresence({
    game: { name: `${client.guilds.size} Servers`, type: "STREAMING" }
  });
});

client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen spotify") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen hulu") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock
    Out Of Stock`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen steam") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen origin") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen crunchyroll") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen uplay") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen roblox") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen nordvpn") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen minecraft") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === "$gen fortnite") {
    if (usedCommandRecently4.has(message.author.id)) {
      message.channel.send("Cooldown Message");
    } else {
      usedCommandRecently4.add(message.author.id);
      setTimeout(() => {
        usedCommandRecently4.delete(message.author.id);
      }, 10000);
      var string = `
    LET'S GO
    LEL
    FUDGE
    SHIET
    HOLY SHIT
    LMAO
    DED
    FCK
    LOL`;
      var words = string.split("\n");
      let random = words[Math.floor(Math.random() * words.length)];
      message.author.send(`${random}`);
    }
  }
});
client.login(token);
