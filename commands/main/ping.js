module.exports = {
  name: "ping",
  usage: "ping",
  desc: "Just makes sure the bot is online",
  alias:["pong"],
  run(client,message,args) {
    message.reply("**Pong!**")
  }
}