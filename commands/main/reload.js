function deleteBotCommandModules() {
  for(var key in require.cache) { // loop through each key
    if(key.includes("commands")) { // If the key includes folder names of "commands", delete that key.
      delete key
    }
  }
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
        deleteBotCommandModules()
        client.loadFiles()
        message.reply(`I have reloaded sucessfully`)
      }
      catch(error) {
        message.reply(`I can't seem to reload. I have an error of:\n\`\`\`\n${error}\`\`\``)
      }
    }
  }
}