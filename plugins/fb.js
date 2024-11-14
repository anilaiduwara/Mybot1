

const { cmd } = require('../command')
const { fetchJson } = require('../lib/functions')




cmd({
    pattern: "fb",
    alias: ["fbdl","fb2"],
    react: "🍧",
    desc: "",
    category: "download",
    use: '.fb < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('facebook.com')) return await reply("This url is invalid");
  
const fb2 = await fetchJson(`https://dark-yasiya-api-new.vercel.app/download/fbdl1?url=${q}`);


     let desc = ` *BLACK LEAUGE MD FB DOWNLOADER...⚙️*

*Reply This Message With Option*

*1 Download FB Video In HD*
*2 Download FB Video In SD*

> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*`;

 
        const vv = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/3f7249eb429c8211cbba3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
   // SEND HD VIDEO
await conn.sendMessage(from, { video: { url: fb2.result.sd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
                        break;
                        case'2':
await conn.sendMessage(from, { video: { url: fb2.result.hd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
                        break;
                        default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });
  
} catch (e) {
console.log(e)
reply(e)
}
});


cmd({
    pattern: "id",
    alias: ["igdl","ig2"],
    react: "🎥",
    desc: "",
    category: "download",
    use: '.fb < url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("Please give me tiktok url");
  if(!q.includes('instagram.com')) return await reply("This url is invalid");
  
const igdl = await fetchJson(`https://api-pink-venom.vercel.app/api/igdl?url=${q}`);
  
  


// SEND HD VIDEO
await conn.sendMessage(from, { video: { url: igdl.result.sd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });
await conn.sendMessage(from, { video: { url: igdl.result.hd }, mimetype: "video/mp4", caption: "> *𝙋𝙊𝙒𝙀𝙍𝘿 𝘽𝙔 𝘼𝙉𝙄𝙇𝘼 𝙇𝙊𝘾𝙃𝘼𝙉𝘼*" }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply(e)
}
});


