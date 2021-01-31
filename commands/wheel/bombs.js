const wheels = require("../json/wheels.json")

module.exports = {
  name: "bombs",
  usage: "bombs",
  desc: "Spins the Wheel of Bombs",
  alias:["con"],
  run(client,message,args) {
    let itemName = wheels.bombs.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}