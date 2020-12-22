const wheels = require("../json/wheels.json")

module.exports = {
  name: "technology",
  usage: "technology",
  desc: "Spins the Wheel of Technology",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.technology)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}