const wheels = require("../json/wheels.json")

module.exports = {
  name: "afterbirth+",
  usage: "afterbirth+",
  desc: "Spins the Wheel of Afterbirth+",
  alias:["ab+"],
  run(client,message,args) {
    let itemName = wheels["afterbirth+"].choose()

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}