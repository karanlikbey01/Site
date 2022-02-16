//////////// Dashboard ////////////
//////////// Aşağıdaki kısım altyapı (bot.js vb.) atılacaktır.


const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
const { promisify } = require('util')

client.config = require("./config.js")
client.logger = console
client.wait = promisify(setTimeout)
client.ayar = db

String.prototype.toProperCase = function() {
  return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Uncaught Exception: ", errorMsg);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});