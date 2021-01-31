const wheels = require("../json/wheels.json")

module.exports = {
  name: "default",
  usage: "wheel",
  desc: "Spins the main Wheel of Isaac",
  alias: [""],
  run(client,message,args) {

    let wheelName = wheels.default.choose()
    message.channel.send(`Wheel has landed on: **${wheelName}**`)
  }
}