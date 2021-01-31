const wheels = require("../json/wheels.json")

module.exports = {
  name: "body",
  usage: "body",
  desc: "Spins the Wheel of Body Parts",
  alias:["con"],
  run(client,message,args) {
    let itemName = wheels.body.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}