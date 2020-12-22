const wheels = require("../json/wheels.json")

module.exports = {
  name: "orbitals",
  usage: "orbitals",
  desc: "Spins the Wheel of Orbitals",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.orbitals)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}