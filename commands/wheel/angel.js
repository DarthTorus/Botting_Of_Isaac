const wheels = require("../json/wheels.json")

module.exports = {
  name: "angel",
  usage: "angel",
  desc: "Spins the Wheel of Angel",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.angel.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}