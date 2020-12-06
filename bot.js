/**
 * @description This bot is for the game Binding of Isaac
 * @author DarthTorus 
 */


/*Variable area*/
// Must be first because it is the settings for most of below
require("dotenv").config();
  
const Discord = require('discord.js')
const glob = require( 'glob' )
const { parse } = require( 'path' )

const client = new Discord.Client()
let colors = require('colors/safe');
client.PNGImage = PNGImage
const trigger = process.env.TRIGGER
client.trigger = trigger

client.loadFiles = function() {
	client.commands = new Discord.Collection()
	glob( './commands/**/*.js', (_, files) => {

		files.forEach( file => {
				
				const { dir } = parse( file )
				const folder = dir.split('/').pop()

				if ( !client.commands.has( folder ) ) client.commands.set( folder, new Discord.Collection() )

				const command = require( file )
				
				client.commands.get( folder ).set( command.name, command )

		})
		//console.log(client.commands)
	})
	client.GAME_LIST = require("./json/statusList.json")


	client.events = new Discord.Collection()
	glob( './events/*.js', (_, files) => {

			files.forEach( file => {

					const event = require( file )
					const { name } = parse( file)
					
					client.on( name, event( client ) )
					
			} )

	} )
}


// This just loads the files from the function above.
client.loadFiles()

// login to Discord with your app's token. Last thing client should do
client.login(process.env.TOKEN);