
const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site' // API LINK ( DO NOT CHANGE THIS!! )

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, reply, q}) => {
try{

if(!q) return reply('Give me song name or url !')
    
const search = await fetchJson(`${apilink}/search/yt?q=${q}`)
const data = search.result.data[0];
const url = data.url
    
const ytdl = await fetchJson(`${apilink}/download/ytmp3?url=${data.url}`)
    
let message = `‎‎           🎶 YT SONG DOWNLOADER 🎶


 🎵 ‎Title: ${data.title}
 ⏱ Duration: ${data.timestamp}
 🌏 Uploaded: ${data.ago}
 🧿 Views: ${data.views}
 🤵 Author: ${data.author.name}
  📎 Url: ${data.url}

1Download song audio type
2Download song document type
`

        const vv = await conn.sendMessage(from, { image: { url : data.thumbnail }, caption: message }, { quoted : mek });
  
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
 // SEND AUDIO NORMAL TYPE and DOCUMENT TYPE
await conn.sendMessage(from, { audio: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek })
                        break;
                        case'2':
await conn.sendMessage(from, { document: { url: ytdl.result.dl_link }, mimetype: "audio/mpeg", fileName: data.title + ".mp3", caption: `${data.title}`}, { quoted: mek })
                       break;
                       default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
  
} catch(e){
console.log(e)
reply(e)
}
});
