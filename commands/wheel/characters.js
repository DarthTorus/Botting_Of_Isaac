const wheels = require("../json/wheels.json")

module.exports = {
  name: "characters",
  usage: "characters",
  desc: "Spins the Wheel of Characters",
  alias:["char"],
  run(client,message,args) {
    let itemName = wheels.characters.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}