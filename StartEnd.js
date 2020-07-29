client.on("message", message => {
  if (message.author.bot) return;
  // This is where we'll put our code.
  if (message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'round start') {
    message.channel.send('1.9.2020!');
  } else
  if (command === 'round end') {
    message.channel.send('29.8.2020!');
  }
});