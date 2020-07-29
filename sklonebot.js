const Discord = require("discord.js");
// const Express = require("express");
const RoundStart = ("StartEnd.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = "!sklone"; // set prefix in json


client.on("ready", () => {
  console.log("Sklonebot is  ready!!!!!");
});

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "dank")) {
    message.channel.send("Dank Is the SHIT!!");
  } else
  if (message.content.startsWith(prefix + "lovsan")) {
    message.channel.send("Lovsan IS the SHIT TOO!");
  }
  if (command === "asl") {
    let age = args[0]; // Remember arrays are 0-based!.
    let sex = args[1];
    let location = args[2];
    message.reply(`Wazzupp ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
});

client.login("config.token");