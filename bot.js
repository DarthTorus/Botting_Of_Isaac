/**
 * @description This bot is for the game Binding of Isaac
 * @author DarthTorus
 */
/*Variable area*/
// Must be first because it is the settings for most of below
require("dotenv").config();

const Discord = require('discord.js')
const glob = require('glob')
const {parse} = require('path')
let PNGImage = require('pngjs-image')
const client = new Discord.Client()
let colors = require('colors/safe')
process.Discord = client
client.PNGImage = PNGImage
const trigger = process.env.TRIGGER
client.trigger = trigger
client.colors = colors



/**
 * @description Returns a random value given 0, 1, or 2 arguments
 * @param {number} [max] - Maximum value
 * @param {number} [min] - Minimum value
 * @example
 * //returns value between 0 and 1
 * client.random()
 * @example
 * //returns value between 0 and max
 * client.random(max)
 * @example
 * //returns value between min and max
 * client.random(min, max)
 * @returns {number} Random integer
 */
client.random = function () {
	var min, max = 0
	if (arguments.length == 1) {
		// Between 0 and max
		max = arguments[0]
		min = 0
	} else if (arguments.length == 2) {
		// between min and max
		min = arguments[0]
		max = arguments[1]
	} else {
		// a decimal between 0 and 1 by default
		return Math.random()
	}

	return Math.floor(Math.random() * (max - min)) + min
}

/**
 * @param {String} str
 * @description Returns the string with each word capitalized
 */
client.titleCase = function (str) {
	return str.toLowerCase().split(' ').map(function (word) {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
}

/**
 * @description Returns a random item from the provided list
 * @param {String[]} list
 * @returns {String} element
 */
client.choose = function (list) {
	return list.length > 0 ? list[client.random(list.length)] : "No items in the list"
}


client.loadFiles = function () {
	client.commands = new Discord.Collection()
	glob('./commands/**/*.js', (_, files) => {

		files.forEach(file => {

			const {
				dir
			} = parse(file)
			const folder = dir.split('/').pop()

			if (!client.commands.has(folder)) client.commands.set(folder, new Discord.Collection())

			const command = require(file)

			client.commands.get(folder).set(command.name, command)

		})
		//console.log(client.commands)
	})
	//client.GAME_LIST = require("./json/statusList.json")
}

	client.events = new Discord.Collection()
	glob('./events/*.js', (_, files) => {
		files.forEach(file => {
			const event = require(file)
			const {
				name
			} = parse(file)
			client.on(name, event(client))
		})
	})

// This just loads the files from the function above.
client.loadFiles()

// login to Discord with your app's token. Last thing client should do
client.login(process.env.TOKEN);