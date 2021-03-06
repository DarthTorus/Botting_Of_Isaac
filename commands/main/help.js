module.exports = {
	name: 'help',
	usage: 'help [command] [subcommand]',
	desc: 'Shows all commands or explains specific commands',
	alias: ['h'],
	run( client, message, args ) {

			if ( !args[0] ) {

					const result = client.commands.reduce( ( total, parent, key ) => {

						const commands = parent
                        .filter( command => command.name != 'default' )
                        .map( ({ name }) => `│ ├─${name}` )
                        .join('\n');
						return total + `├─${key}\n${commands}\n`

					}, '' )

					message.channel.send( `\`\`\`\nTrigger: ${process.env.TRIGGER}\n${result}\`\`\`` )

			} else {

					let parent;
					let request = args[0];
					if ( client.commands.has( args[0] ) && client.commands.get( args[0] ).has('default') ) {
							parent = args.shift()
							request = args.shift() || 'default'
					} else {
							parent = 'main'
					}

					const command = client.commands.get( parent ).find( command => command.name === request || command.alias.includes(request) )
					if ( !command ) {
						return message.channel.send('No command found.')
					}

					let name = command.name;
					if ( parent != 'main' ) {
							name = `${parent} ${command.name}`
							if ( command.name === 'default' ) {
								name = parent
							}
					}
					let aliasCheck = ""
					if(command.alias[0] == "" ) {
						aliasCheck = "N/A"
					} else {
						aliasCheck = command.alias.join(", ")
					}
					const result = `\`\`\`\nCommand: ${process.env.TRIGGER}${name}\nUsage: ${command.usage}\nDescription: ${command.desc}\nAlias: ${aliasCheck}\`\`\``

					message.channel.send( result )

			}

	}

}