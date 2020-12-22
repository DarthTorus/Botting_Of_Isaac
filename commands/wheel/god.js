const wheels = require("../json/wheels.json")

module.exports = {
  name: "god",
  usage: "god",
  desc: "Spins the Wheel of God",
  alias:["con"],
  run(client,message,args) {
    let itemName = client.choose(wheels.god)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}