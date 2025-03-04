const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " ღ⸙𝐓𝐀𝐌𝐈𝐌ღ⸙ ";
		const ownAge = "『 ⸙__17+__⸙ 』";
		const messenger = "https://m.me/𝙗𝙧𝙖𝙣𝙙.𝙩𝙖𝙢𝙞𝙢.69";
		const authorFB = "https://www.facebook.com/brand.tamim69";
		const authorNumber = "_0189*****𝙚𝙧𝙧𝙤𝙧";
		const Status = "ღ__𝙋𝙐𝙍𝘼𝙄 𝙎𝙄𝙉𝙂𝙇𝙀 __ღ";
		const urls = [
"https://i.imgur.com/kcNKM4f.mp4",
"https://i.imgur.com/kcNKM4f.mp4",
"https://i.imgur.com/kcNKM4f.mp4",
"https://i.imgur.com/kcNKM4f.mp4"
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `💫《 ⸙__𝐁𝐨𝐭 𝐀𝐧𝐝 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧__⸙ 》💫
\🤖彡𝐵𝑜𝑡 𝑁𝑎𝑚𝑒 : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾彡𝐵𝑜𝑡 𝑆𝑦𝑠𝑡𝑒𝑚 𝑃𝑟𝑒𝑓𝑖𝑥 : ${global.GoatBot.config.prefix}
\💙彡𝑂𝑤𝑛𝑒𝑟 𝑁𝑎𝑚𝑒 : ${authorName}
\📝彡𝐴𝑔𝑒  : ${ownAge}
\💕彡𝑅𝑒𝑙𝑎𝑡𝑖𝑜𝑛𝑆ℎ𝑖𝑝: ${Status}
\🌐彡𝑊𝑝 : ${authorNumber}
\🌍彡𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝐿𝑖𝑛𝑘 : ${authorFB}
\🗓彡𝐷𝑎𝑡𝑒 : ${date}
\⏰彡𝑁𝑜𝑤 𝑇𝑖𝑚𝑒 : ${time}
\🔰彡𝐴𝑛𝑦 𝐻𝑒𝑙𝑝 𝐶𝑜𝑛𝑡𝑎𝑐𝑡 :⩸__${messenger}__⩸
\📛彡𝐵𝑜𝑡 𝐼𝑠 𝑅𝑢𝑛𝑛𝑖𝑛𝑔 𝐹𝑜𝑟 : ${uptimeString}
    𝑻𝒈: https://t.me/IMTAMIMOK69
    𝑰𝒏𝒔𝒕𝒂: https://www.instagram.com/tamim_4203
    𝑪𝒂𝒑𝑪𝒖𝒕: 𝐬𝐨𝐫𝐫𝐲>³
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝐭𝐢𝐤𝐭𝐨𝐤 𝐦𝐚𝐫𝐚𝐲 𝐧𝐚
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝐰𝐚𝐢𝐭⚠
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
