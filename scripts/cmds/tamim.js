module.exports = {
 config: {
	 name: "tamim",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "tamim") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ʜᴇʏ ..\n❥︎----ღ᭄_  ᴮᴿᴼᵀᴴᴱᴿ❞࿐.♡.\nᥫᩣ ɪᴛ’s ᴛᴀᴍɪᴍ\n\n𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑\n𝐓𝐀𝐌𝐈𝐌♡」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/55RrN7I.mp4")
 });
 }
 }
}
