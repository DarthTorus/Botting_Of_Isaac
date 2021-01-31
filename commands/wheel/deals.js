const wheels = require("../json/wheels.json")

module.exports = {
  name: "deals",
  usage: "deals",
  desc: "Spins the Wheel of Deals",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.deals.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}