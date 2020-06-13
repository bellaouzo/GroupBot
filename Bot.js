const Discord = require('discord.js');
const client = new Discord.Client();
const noblox = require('noblox.js');
const nbx = require('noblox.js');
let roblox = require('roblox-js');
let prefix = "!"
let GroupId = 3010494;

async function Login() {
  await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_E155C8E0FFB2588F881ED9D74B33E0029666EBC9A468F2B671466418CB82B1A23DD77D047EF69E9B283D9434F233F87D92B15EEBE26D6DC5F19FFE76A0D53FCF781E2E3E2AFB7E555F200C22F62D5DD55203C278F067B27B31D96280F92983332D205EACDF0BB68C2E9B43CA3A48B776FF5C1A284705D3AA54AA2F3DD9235E6A87FD131CA08473F42ACB24CF00B65AC6A82E7F3DCEEC2F36A0E9CC053E348C09191782E3E8B38CB31279CCB8A5428A233816135DAC3C39E533EB2F3132DE891DEDC34A1D37B74ED46432B3A5521A9BD7A564225E40C55D654B3CFA967654797CA551EDAD8CB0B38B0A79908F5853DDBFEFF529B4BB71D0C09DB3AC95FBB09DE14DDA5C7D030B2B28C3B545B9FEC49FA63CCB2A2296CF0FC88739A63D3BF35C2672A4601B');
}

async function exec() {
    const userId = await nbx.getIdFromUsername('Qxest') // 55549140
  
    console.log("This user's ID is " + userId)
  }

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => { // Event runs when there is a new message
    if (message.author.bot) return; // Here we check if the message sender is the bot, if it is, it returns and does not carry any further.
    if (message.content.indexOf(prefix) !== 0) return; // Checks if the message has the Prefix

    // Here we separate our "command" and our "arguments/args" for the command. 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Checks if the command is matching the provided string

    if (command === "accept") {
        if (!args) { // Check if there's no arguments to use to shout, and return (stop going further)
            return;
            message.reply('Please specify the user to accept.')
        }
        const userID = args.join(" "); // Joins the arguments minus prefix to form the ID that should be accepted

        nbx.handleJoinRequest(3010494, args.join(" ") , true)
        message.reply('Accepted user.')
    }
})

Login();
exec();

client.login('NzIxMjA5MzIyODMwNTYxMzQw.XuRMig.YUDRa5KFQ9nFdQx86yLgvyLrwZI');