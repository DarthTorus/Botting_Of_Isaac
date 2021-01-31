const wheels = require("../json/wheels.json")

module.exports = {
  name: "toys",
  usage: "toys",
  desc: "Spins the Wheel of Toys",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.toys.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}