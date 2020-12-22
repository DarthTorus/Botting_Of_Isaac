const wheels = require("../json/wheels.json")

module.exports = {
  name: "family",
  usage: "family",
  desc: "Spins the Wheel of Family",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.family)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}