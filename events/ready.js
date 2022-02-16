const Discord = require('discord.js');

module.exports = async client => {
  client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
    
    require("../util/dashboard.js")(client);
};