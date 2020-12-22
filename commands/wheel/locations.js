const wheels = require("../json/wheels.json")

module.exports = {
  name: "locations",
  usage: "locations",
  desc: "Spins the Wheel of Locations",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.locations)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}