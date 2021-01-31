const wheels = require("../json/wheels.json")

module.exports = {
  name: "shop",
  usage: "shop",
  desc: "Spins the Wheel of Shop",
  alias:[""],
  run(client,message,args) {
    let itemName = wheels.shop.choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}