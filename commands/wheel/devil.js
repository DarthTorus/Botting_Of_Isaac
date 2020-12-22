const wheels = require("../json/wheels.json")

module.exports = {
  name: "devil",
  usage: "devil",
  desc: "Spins the Wheel of Devil",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.devil)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}