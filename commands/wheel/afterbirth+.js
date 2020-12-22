const wheels = require("../json/wheels.json")

module.exports = {
  name: "afterbirth+",
  usage: "afterbirth+",
  desc: "Spins the Wheel of Afterbirth+",
  alias:["con"],
  run(client,message,args) {
    let itemName = client.choose(wheels["afterbirth+"])

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}