const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝐈𝐓𝐒 𝐓𝐀𝐌𝐈𝐌',
      gender: '𝐌𝐀𝐋𝐄',
      age: '17+',
      height: '𝐮𝐧𝐤𝐜𝐧𝐨𝐰𝐧',
      facebookLink: 'https://www.facebook.com/brand.tamim.69',
      nick: '𝙏𝘼𝙈𝙄𝙈ᰔᩚ'
    };

    const bold = 'https://i.imgur.com/wK1rmqK.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
