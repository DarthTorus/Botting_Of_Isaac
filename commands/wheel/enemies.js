const wheels = require("../json/wheels.json")

module.exports = {
  name: "enemies",
  usage: "enemies",
  desc: "Spins the Wheel of Enemies",
  alias:["con"],
  run(client,message,args) {
    let itemName = client.choose(wheels.enemies)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}