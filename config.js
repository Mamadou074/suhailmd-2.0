const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_06_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDgwLFxuICAgICAgICA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMjM2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6OTJuTGdQVWVhcjFyOFNnSHl6SUlqaXdEeFRWazJuTDRkV3JUS1FZQ3owPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjdkl1U0RpTVNtU0wwWExwUGg3SGR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxYWY1ZTJmLWVmYTAtNDdmYS1hOWNmLTYzNzJiMzU3MDUzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDcsXG4gICAgICAyMzEsXG4gICAgICAxMzEsXG4gICAgICAxMjgsXG4gICAgICAxMjMsXG4gICAgICAxNDgsXG4gICAgICA5NCxcbiAgICAgIDE0NCxcbiAgICAgIDgxLFxuICAgICAgMjIzLFxuICAgICAgNDEsXG4gICAgICAyNixcbiAgICAgIDk0LFxuICAgICAgMTcxLFxuICAgICAgMTQsXG4gICAgICA5NCxcbiAgICAgIDgsXG4gICAgICA3NCxcbiAgICAgIDkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDE5NSxcbiAgICAgIDI5LFxuICAgICAgNTEsXG4gICAgICAxMTUsXG4gICAgICAyNTQsXG4gICAgICAyNDUsXG4gICAgICAzNixcbiAgICAgIDIyMyxcbiAgICAgIDExNixcbiAgICAgIDI0NSxcbiAgICAgIDE2MSxcbiAgICAgIDIyMSxcbiAgICAgIDE1MyxcbiAgICAgIDY3LFxuICAgICAgODcsXG4gICAgICAxNyxcbiAgICAgIDE3OCxcbiAgICAgIDI0MCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDV0NQU0szUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIxNzYxNTUxNTkxOjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDAxNTQzMDA4NTQzMjA6NjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjPCdkJrwnZCm8J2QmvCdkJ3wnZCo8J2QrlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tyditvZ01FSTdVcTdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1habWVBemtvM1R6dEdmM0xPWG9rVWU2aDU0RHJWOU56L2N0V3BOZHRGZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0R2ZrMlh5aURnd3BjemV5VzlmYk9hbmlaTTdvMVJCSzVDSmpPazViSWFSbFhwVjZVVWgxOEE5ZEdTL3dNdnNOU1Rma3BlYlpxYWxMUU1JY3NLcU5EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjbHI5S3RYR1VWSlF3clFLbFhxSDNkMlBsRmZpc1Bha2orQ3AxVldXYnhhMXZvQnEwcDl5bS9iRGRHUGwwYVViVVZmSlppSW42KzY5dFhBUUFaUm1EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NjE1NTE1OTE6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA1OTk4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlVMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVUwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGV5c0VwUzdQZlJZU2VESFlSRmNIeEtGZmo3KzY0RXp2WHh0V0x2TkJPRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjQwMDE1Nzg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwNTk5ODg4MjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
