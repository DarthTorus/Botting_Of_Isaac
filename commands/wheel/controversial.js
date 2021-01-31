const wheels = require("../json/wheels.json")

module.exports = {
  name: "controversial",
  usage: "controversial",
  desc: "Spins the Wheel of Controversial",
  alias:["con"],
  run(client,message,args) {
    let itemName = wheels.controversial.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}