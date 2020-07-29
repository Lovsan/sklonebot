const Discord = require("discord.js");
// const Express = require("express");
const RoundStart = ("StartEnd.js");
const client = new Discord.Client();
const config = require("./config.json");
//const prefix = "!*"; // set prefix in json


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
  if(command === "say"){
    let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }
});

client.login("config.token");
