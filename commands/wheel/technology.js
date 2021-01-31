const wheels = require("../json/wheels.json")

module.exports = {
  name: "technology",
  usage: "technology",
  desc: "Spins the Wheel of Technology",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.technology.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}