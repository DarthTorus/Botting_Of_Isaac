const { run } = require("./ping");

module.exports = {
  name: "default",
  usage: "boi!",
  desc: "Default result if not found",
  alias: [""],
  run(client, message, args) {
    message.channel.send("I have no clue what to do.")
  }
}