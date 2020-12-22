const wheels = require("../json/wheels.json")

module.exports = {
  name: "poopoo",
  usage: "poopoo",
  desc: "Spins the Wheel of Poopoo",
  alias:["poo"],
  run(client,message,args) {
    let itemName = client.choose(wheels.poopoo)

    message.channel.send(`Item choosen is: **${itemName}**`)
  }
}