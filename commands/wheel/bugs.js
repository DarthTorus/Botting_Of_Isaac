const wheels = require("../json/wheels.json")

module.exports = {
  name: "bugs",
  usage: "bugs",
  desc: "Spins the Wheel of Bugs",
  alias:["con"],
  run(client,message,args) {
    let itemName = wheels.bugs.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}