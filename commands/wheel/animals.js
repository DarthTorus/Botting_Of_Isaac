const wheels = require("../json/wheels.json")

module.exports = {
  name: "animals",
  usage: "animals",
  desc: "Spins the Wheel of Animals",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.animals.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}