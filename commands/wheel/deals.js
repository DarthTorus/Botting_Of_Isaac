const wheels = require("../json/wheels.json")

module.exports = {
  name: "deals",
  usage: "deals",
  desc: "Spins the Wheel of Deals",
  alias:[""],
  run(client,message,args) {
    let itemName = client.choose(wheels.deals)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}