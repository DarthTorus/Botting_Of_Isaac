const wheels = require("../json/wheels.json")

module.exports = {
  name: "people",
  usage: "people",
  desc: "Spins the Wheel of People",
  alias:["con"],
  run(client,message,args) {
    let itemName = wheels.people.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}