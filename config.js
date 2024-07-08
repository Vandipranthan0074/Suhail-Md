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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_51_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY4LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjksXG4gICAgICAgIDc0LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNixcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6OUhXTjRDNVpDMGMvRnFMYWduc2k4VnlrUitlOWVWNmtlR2ROYmRzRlNnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjb1FPSFVLOVRHbWEtUV8xaHNlZUVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiNmVkMDk2LTM1M2YtNGJjNy1iMDAwLWZmNzRkOTJmNzJmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAyMDcsXG4gICAgICAyMjEsXG4gICAgICA4MixcbiAgICAgIDE0NSxcbiAgICAgIDE1NCxcbiAgICAgIDIzNixcbiAgICAgIDI1NCxcbiAgICAgIDIxMyxcbiAgICAgIDE0NSxcbiAgICAgIDI1MixcbiAgICAgIDEzMSxcbiAgICAgIDIyLFxuICAgICAgOCxcbiAgICAgIDE5MyxcbiAgICAgIDU3LFxuICAgICAgMjAsXG4gICAgICA5NCxcbiAgICAgIDg1LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgODIsXG4gICAgICAxNTgsXG4gICAgICAyMSxcbiAgICAgIDE1NSxcbiAgICAgIDc3LFxuICAgICAgMjM1LFxuICAgICAgMTgzLFxuICAgICAgMTUzLFxuICAgICAgMjUyLFxuICAgICAgMTY5LFxuICAgICAgMjA2LFxuICAgICAgMTc2LFxuICAgICAgMjA0LFxuICAgICAgNDcsXG4gICAgICA2MixcbiAgICAgIDEyLFxuICAgICAgMCxcbiAgICAgIDYzLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQenNvZnNDRUtQT3NMUUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFzRGZjTnVLaXhlalp4ZVpMNmpxZ2lGNW10UDIyekcyRzJTS1lSb29sMW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia2ZhZk54VEVhdHUwRVR3MVJwTGRlMk50NmZicjVld0FPLy9UNDZsN0dYa2tqZmt0UDVSN1l5ZGRlVUEzUGhCdXVPZmJ6ZjlxUEtrUDZFd2lMVmhPQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaFlpTi9INGpQTzg3dHhGeDZmVGUyYnFmODRiWmtRTlFaNWlFRXFhM3cyQmFEbnphZFVmUlgyUUszYjRuaWxieWt0cTFBUkoreTdrMUZld29QemFoRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5OTQ1OTEzMDQ6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTg1Mzg5OTAzMDc3Nzo5NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzk5NDU5MTMwNDo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ2MTA5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBNaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUE1nLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWZ2Rk5hSE43WkNGeEdqS3BpdE1CWm40OHQvVVZWWGtsbEU3TlF0SllHTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3OTUzNzUyMjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE5MzkzMDQ3MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBNaC5qc29uIjogIntcImtleURhdGFcIjpcIm1SVnp5azIrZHdTRUd5RDJwTEM1MnFkUko4bHdoQWJQczFHR3ExM0h4dXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzk1Mzc1MjI4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAxOTQ0ODQ4ODBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
