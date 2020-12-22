const wheels = require("../json/wheels.json")

module.exports = {
  name: "default",
  usage: "wheel",
  desc: "Spins the main Wheel of Isaac",
  alias: ["spin"],
  run(client,message,args) {

    let wheelName = client.choose(wheels.default)
    message.channel.send(`Wheel has landed on: **${wheelName}**`)
  }
}