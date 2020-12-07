function clearRequireCache() {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });  
}

module.exports = {
  name: "reload",
  usage: "reload",
  desc: "Reloads the bot without it disconnecting",
  alias: ["restart"],
  run(client,message,args) {
    if(message.author.id != process.env.OWNER_ID) {
      message.reply("You don't have the permission to do that.")
    } 
    else {
      try {
        clearRequireCache()
        client.loadFiles(client)
        message.reply(`I have reloaded sucessfully`)
      }
      catch(error) {
        message.reply(`I can't seem to reload. I have an error of: ${error}`)
      }
    }
  }
}