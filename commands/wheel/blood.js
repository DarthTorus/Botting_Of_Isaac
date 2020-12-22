const wheels = require("../json/wheels.json")

module.exports = {
  name: "blood",
  usage: "blood",
  desc: "Spins the Wheel of Blood",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.blood)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}