module.exports = {
  name: "add",
  usage: "add",
  desc: "Adds the bot to a server",
  alias: ["invite"],
  run(client, message, args) {
    try {
      message.author.send("Invite link: " + process.env.ADD_LINK);
      message.channel.send("I have sent an invite link with the swiftest digital falcon bits could create to your DMs!");
    }
    catch (err) {
      message.channel.send("I couldn't send you a link to add me to your wonderful server!");
    }
  }
}