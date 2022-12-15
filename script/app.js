// ---------------------------------------------
// discord bot notification
// ---------------------------------------------
const discord = require("./discord");

// command args
let webhook_url = ""
let content = ""
let botname = ""
let mode = ""
for(let i = 0;i < process.argv.length; i++)
{
	switch(process.argv[i]){
		case "/url":
			webhook_url = process.argv[i+1]
			break
		case "/content":
			content = process.argv[i+1]
			break
		case "/botname":
			botname = process.argv[i+1]
			break
		case "/prod":
			mode = "prod"
			break
	}
}
console.log("mode : " + mode)
console.log("botname : " + botname)
console.log("content : " + content)
console.log("webhook url : " + webhook_url)

// discord bot
discord.post(webhook_url, content, botname)