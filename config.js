const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176,917994591304";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_33_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjExLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ4T0ZENlV4dm1mWlExM2NWb3E4UGYzZ1FEMndFU2tqRkNHSEd3MmlPeUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3OTk0NTkxMzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MkIzQjMxMDNDMEMzMjMyREVDN0NDQjQxRDIzRDNBQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MDY3ODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWEVSaXhwUXlTY3lETWQzMGxLQU44QVwiLFxuICBcInBob25lSWRcIjogXCIxZjFkNTVlMC1jMDdiLTRkZjEtOGE1My0wMjU2OTAyNTJhZjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAxMzAsXG4gICAgICAxNzksXG4gICAgICAyMzcsXG4gICAgICA3MixcbiAgICAgIDk4LFxuICAgICAgMTU0LFxuICAgICAgMTk0LFxuICAgICAgMTc1LFxuICAgICAgMTM3LFxuICAgICAgMTYsXG4gICAgICAxMzcsXG4gICAgICAyMTgsXG4gICAgICAyMzUsXG4gICAgICA3MixcbiAgICAgIDE1MCxcbiAgICAgIDk3LFxuICAgICAgMjAwLFxuICAgICAgMTU2LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDUwLFxuICAgICAgMTk4LFxuICAgICAgMjIwLFxuICAgICAgMjAxLFxuICAgICAgNTQsXG4gICAgICA0NSxcbiAgICAgIDEwNCxcbiAgICAgIDE2OSxcbiAgICAgIDIxMSxcbiAgICAgIDIwNyxcbiAgICAgIDE0OSxcbiAgICAgIDQxLFxuICAgICAgOTgsXG4gICAgICAxMTAsXG4gICAgICAxMjgsXG4gICAgICAyMixcbiAgICAgIDIzNyxcbiAgICAgIDc2LFxuICAgICAgMTAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhWNkNXSDZSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5OTQ1OTEzMDQ6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTg1Mzg5OTAzMDc3Nzo5NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQenNvZnNDRUphenM3UUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFzRGZjTnVLaXhlalp4ZVpMNmpxZ2lGNW10UDIyekcyRzJTS1lSb29sMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjR6YlcxYkF0aDFSOG1Wd3FZcUZUemo1UnpNM0I4cHM0MXhYL0RmQUk2VG4rekgvV3A2STlUVlpnMkxJMExJT0E2UVVmSmpHMUhTdnlqSytXaGN0Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic1N4N01yOWpQRVFYb1hQaE9qK0pRVm15WHVuRVhLQVpLVUE5bkpuZ0k2ZkRLaW9TM29obUFOc29mT0NmWFA1eVVZV3g1OEdSbHdqTzE3aHFncFhERGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTk0NTkxMzA0Ojk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTA2Nzc3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUE1oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQTWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtUlZ6eWsyK2R3U0VHeUQycExDNTJxZFJKOGx3aEFiUHMxR0dxMTNIeHV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc5NTM3NTIyOCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ꪜꪖꪀ∂ιρяꪖꪀтнꪖꪀ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
