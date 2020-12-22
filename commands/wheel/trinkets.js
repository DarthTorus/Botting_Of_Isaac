const wheels = require("../json/wheels.json")

module.exports = {
  name: "trinkets",
  usage: "trinkets",
  desc: "Spins the Wheel of Trinkets",
  alias:["trinket"],
  run(client,message,args) {
    let itemName = client.choose(wheels.trinkets)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}