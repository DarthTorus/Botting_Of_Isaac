const wheels = require("../json/wheels.json")

module.exports = {
  name: "eyes",
  usage: "eyes",
  desc: "Spins the Wheel of Eyes",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.eyes.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}