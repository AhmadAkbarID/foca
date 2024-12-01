/*
BASE ORI PAKOYOFFC
RECODE BY : Kyami
Buy panel ? Chat wa.me/6285179836603
Jangan Di Hapus Credit Gw
*/

require('./setting')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("./lib/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./lib/scraper")
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { bytesToSize, checkBandwidth, formatSize, getBuffer, isUrl, jsonformat, nganuin, pickRandom, getRandom, runtime, shorturl, formatp, color, getGroupAdmins } = require("./lib/myfunc");
const { addExif } = require('./lib/exif')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

const tictactoe = [];
const kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakkata = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}


module.exports = koy = async (koy, m, chatUpdate, store) => {
try {
const body = (m && m?.mtype) ? (
m?.mtype === 'conversation' ? m?.message?.conversation :
m?.mtype === 'imageMessage' ? m?.message?.imageMessage?.caption :
m?.mtype === 'videoMessage' ? m?.message?.videoMessage?.caption :
m?.mtype === 'extendedTextMessage' ? m?.message?.extendedTextMessage?.text :
m?.mtype === 'buttonsResponseMessage' ? m?.message?.buttonsResponseMessage?.selectedButtonId :
m?.mtype === 'listResponseMessage' ? m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId :
m?.mtype === 'templateButtonm?.replyMessage' ? m?.message?.templateButtonm?.replyMessage?.selectedId :
m?.mtype === 'messageContextInfo' ? (
m?.message?.buttonsResponseMessage?.selectedButtonId || 
m?.message?.listResponseMessage?.singleSelectm?.reply?.selectedRowId || 
m?.text
) : ''
) : '';
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await koy.decodeJid(koy.user.id);
const isCreator = (m && m?.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const isRegistered = checkRegisteredUser(m.sender)
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const text = q = args.join(" ");
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m?.quoted || m;
const mime = ((quoted?.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
//group
const groupMetadata = m?.isGroup ? await koy.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata?.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata?.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata?.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const Owner = global.owner + '@s.whatsapp.net'
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))//baru
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//BATAS
//BATAS
koy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await koy.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await koy.getName(i + '@s.whatsapp.net')}\n
FN:${await koy.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:YASSxOFC@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/Mizowen\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
koy.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}
//BATAS
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏞️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//================== [ DATABASE ] ==================//
const totalFitur = () =>{
var mytext = fs.readFileSync("./koy.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await koy.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await koy.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('antilink' in chats)) chats.antilink = false
 if (!('antilinkv2' in chats)) chats.antilinkv2 = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
 antilink: false,
 antilinkv2: false
}


let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
}
} catch (err) {
}

if (!db.data.settings[botNumber].public) {
if (!isOwner) return
}
async function loading() {
var loadd = [
    "Gawr",
    "Gura",
    "MD",
    "GawrGura-MD"
  ];
let { key } = await koy.sendMessage(m.chat, {text: '_Loading_'})//Pengalih Isu

for (let i = 0; i < loadd.length; i++) {
await koy.sendMessage(m.chat, {text: loadd[i], edit: key })}
}
//================== [ FUNC BANCHAT ] ==================//
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isOwner) return
}

if (db.data.settings[botNumber].autoread) { koy.readMessages([m?.key]) }

if (db.data.chats[m?.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
koy.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await koy.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isOwner && isAdmins) return
koy.groupParticipantsUpdate(m?.chat, [m?.sender], 'remove')
}}
if (db.data.chats[m?.chat].antilinkv2) {
if (budy.match(`chat.whatsapp.com`)) {
koy.sendMessage(m?.chat, {react: {text: `❌️`,key: m?.key,}})
if (!isBotAdmins) return
let gclink = (`https://chat.whatsapp.com/` + await koy.groupInviteCode(m?.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m?.text)
if (isgclink && isOwner && isAdmins) return
koy.sendMessage(m?.chat, { delete: m?.key })
}}

switch(command) {
//=================================================//
///            ///
case "cekidgc": {
if (!isOwner) return m.reply(mess.owner)
let getGroups = await koy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ LIST GROUP BY YASSxOFC\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await koy.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
m.reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
////
case "public": {
if (!isOwner) return m.reply(mess.owner)
koy.public = true
m.reply(`*_Sukses Mode Public ✅_*`)
}
break
case "self": {
if (!isOwner) return m.reply(mess.owner)
koy.public = false
m.reply(`*_Sukses Mode Self ✅_*`)
}
break
case 'addprem':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await koy.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} number\nContoh ${prefix+command} 62xxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await koy.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!isOwner) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Use ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let koy of premium) {
teks += `- ${koy}\n`
}
teks += `\n*Total : ${premium.length}*`
koy.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
break
case 'listowner': case 'listown':
teks = '*owner List*\n\n'
for (let kontol of owner) {
teks += `- ${kontol}\n`
}
teks += `\n*Total : ${owner.length}*`
koy.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case 'YASSxOFC':
case 'owner': case 'creator': {
await koy.sendContact(m.chat, owner.map( i => i.split("@")[0]), m)
koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/pakoy12.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})     
}
break
case "tes": case "bot":{
m.reply('_*Bot Sudah Aktif Kak*_')
}
break
case "ownermenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *O W N E R - M E N U* 」
│ あ  ${prefix}self
│ あ  ${prefix}public
│ あ  ${prefix}join
│ あ  ${prefix}addowner
│ あ  ${prefix}delowner
│ あ  ${prefix}getdb
│ あ  ${prefix}getcase
│ あ  ${prefix}addprem
│ あ  ${prefix}delprem
│ あ  ${prefix}bcgc
│ あ  ${prefix}leave
│ あ  ${prefix}addcase
│ あ  ${prefix}delcase
│ あ  ${prefix}backup
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
/////
case "grupmenu":
case "groupmenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *G R O U P - M E N U* 」
│ あ  ${prefix}add ( 628xxxx )
│ あ  ${prefix}kick ( @tag )
│ あ  ${prefix}delete ( reply )
│ あ  ${prefix}hidetag ( teks )
│ あ  ${prefix}gc ( open/close )
│ あ  ${prefix}tagall ( teks )
│ あ  ${prefix}antilink ( on/off )
│ あ  ${prefix}antilinkv2 ( on/off )
│ あ  ${prefix}promote ( @tag )
│ あ  ${prefix}demote ( @tag )
│ あ  ${prefix}editsubjek ( teks )
│ あ  ${prefix}editinfo ( open/close )
│ あ  ${prefix}editdesk ( teks )
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case "downmenu":
case "downloadmenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *D O W N L O A D - M E N U* 」
│ あ  ${prefix}tt ( link )
│ あ  ${prefix}fb ( link )
│ あ  ${prefix}tiktok ( link )
│ あ  ${prefix}ig ( link )
│ あ  ${prefix}gitclone ( link )
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case "convertmenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *C O N V E R T - M E N U* 」
│ あ  ${prefix}tourl ( reply image )
│ あ  ${prefix}toimage ( reply )
│ あ  ${prefix}wm ( reply stiker )
│ あ  ${prefix}ssweb ( link )
│ あ ${prefix}tts ( teks )
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case "voicemenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *V O I C E - M E N U* 」
│ あ ${prefix}bass <send> <song>
│ あ ${prefix}blown <send> <song>
│ あ ${prefix}deep <send> <song>
│ あ ${prefix}earrape <send> <song>
│ あ ${prefix}fast <send> <song>
│ あ ${prefix}fat <send> <song>
│ あ ${prefix}nightcore <send> <song>
│ あ ${prefix}reverse <send> <song>
│ あ ${prefix}robot <send> <song>
│ あ ${prefix}slow <send> <song>
│ あ ${prefix}smooth <send> <song>
│ あ ${prefix}tupai <send> <song>
│ あ ${prefix}smooth <send> <song>
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break

case "mainmenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *M A I N - M E N U* 」
│ あ ${prefix}listpanel
│ あ ${prefix}owner
│ あ ${prefix}ping
│ あ ${prefix}runtime
│ あ ${prefix}sewabot
│ あ ${prefix}qc
│ あ ${prefix}sticker
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
////

case "funmenu":{
await loading()
const tek = `*Hello* @${m?.sender.split('@')[0]}
ɪ ᴀᴍ *GawrGura - MD* ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱyꜱᴛᴇᴍ (ᴡʜᴀᴛꜱᴀᴩᴩ ʙᴏᴛ) ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴩ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟy ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛꜱᴀᴩᴩ

📮ʙᴏᴛ ɪɴɪ ᴍᴀꜱɪʜ ᴛᴀʜᴀᴩ ʙᴇᴛᴀ ᴀᴩᴀʙɪʟᴀ ᴀᴅᴀ ʙᴜɢ/ᴇʀᴏʀ ʜᴀʀᴀᴩ ʟᴀᴩᴏʀ ᴋᴇ ᴏᴡɴᴇʀ. ꜱᴇᴡᴀ ʙᴏᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ.

❏「 *F U N - M E N U* 」
│ あ ${prefix}cekkhodam ( nama )
│ あ ${prefix}pokemon ( nama )
│ あ ${prefix}sound1-161
│ あ ${prefix}apakah
│ あ ${prefix}bagaimanakah
│ あ ${prefix}cekgay
│ あ ${prefix}ceklesbi
│ あ ${prefix}cekganteng
│ あ ${prefix}cekcantik
│ あ ${prefix}bisakah 
│ あ ${prefix}ceksange
╰──────────────━
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});

koy.sendMessage(m.chat, {audio: fs.readFileSync('./media/old2.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
////

case "gawr":
case "menu": {
await loading()
const text12 = `
[ _*I N F O - U S E R*_ ]
⭔ *𝙉𝙖𝙢𝙚 :* *${pushname}*
⭔ *𝙉𝙪𝙢𝙗𝙚𝙧 :* @${m?.sender.split('@')[0]}
⭔ *𝙎𝙩𝙖𝙩𝙪𝙨 :* *${isOwner ? "Developer" : "User ⭐"}*
⭔ *𝙋𝙧𝙚𝙢𝙞𝙪𝙢 :* *${isPremium ? "✅" : "❎"}*

[ _*I N F O - B O T*_ ] 
⭔ *𝘽𝙤𝙩 𝙉𝙖𝙢𝙚 :* GawrGura - MD
⭔ *𝙏𝙮𝙥𝙚 :* Case
⭔ *𝙑𝙚𝙧𝙨𝙞𝙤𝙣 :* 2.0.0
⭔ *𝙏𝙤𝙩𝙖𝙡 𝙁𝙚𝙖𝙩𝙪𝙧𝙚 :* ${totalFitur()}
⭔ *𝙍𝙪𝙣𝙩𝙞𝙢𝙚 :* ${runtime(process.uptime())}

❏「 *L I S T - M E N U* 」
│ あ ownermenu
│ あ groupmenu 
│ あ downmenu
│ あ convertmenu
│ あ mainmenu
│ あ funmenu
│ あ voicemenu
╰──────────────━
© YASSxOFC
`
await koy.sendMessage(m.chat, {
          react: {
            text: '💖',
            key: m.key,
          }})
          await koy.sendMessage(m.chat, {
          react: {
            text: '🖤',
            key: m.key,
          }})
await koy.sendMessage(m.chat, {
          react: {
            text: '💗',
            key: m.key,
          }})
await koy.sendMessage(m.chat, {
          react: {
            text: '😔',
            key: m.key,
          }})
          await koy.sendMessage(m.chat, {
          react: {
            text: '💔',
            key: m.key,
          }});
koy.sendMessage(m.chat, {
      image: fs.readFileSync('./menu.jpg'),
      gifPlayback: false,
      
      caption: text12,
      contextInfo: {
      externalAdReply: {
      title: 'GawrGura-MD',
      body: 'Creator : YASSxOFC',
      thumbnailUrl: 'https://a.top4top.io/p_3237odfvl4.jpg',
      sourceUrl: `https://youtube.com/@yassxofc`,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    } freya = fs.readFileSync('./media/suki.mp3')
koy.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
//=================================================//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
//
case 'apakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break
case 'bisakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break
case 'bagaimanakah': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break
case 'rate': {
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break
case 'gantengcek':
case 'cekganteng': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}%`)
}
break
case 'cantikcek':
case 'cekcantik': {
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}%`)
}
break
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi': {

if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break
//=================================================//
case "add":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break
//=================================================//
case "kick":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break
//=================================================//
case "pushkontakv2":
case "pv2":{
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
global.tekspushkonv2 = text
const groupMetadata = m.isGroup? await koy.groupMetadata(from).catch(e => {}) : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await koy.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await koy.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
} else {
await koy.sendMessage(men, { text: global.tekspushkonv2 })
}
}
koy.sendMessage("6285179836603@s.whatsapp.net", {text:`🕊️ Sukses Bang...`})
}
break
///
case "promote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di promote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'promote').catch(console.log)
}
break
//=================================================//
case "demote":{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text && !m?.quoted) m?.reply('masukkan nomor yang ingin di demote')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await koy.groupParticipantsUpdate(m?.chat, [users], 'demote').catch(console.log)
}
break
//=================================================//
case 'play':{
if (!q) return m.reply(`🚩 *Contoh:* ${prefix+command} Seventeen JKT48`)
let yts = require('yt-search')
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let a = `💸Duration : ${anu.timestamp}\n🎉Viewers : ${anu.views}\n`
await koy.sendMessage(m.chat, {
text: a,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.ago,
thumbnailUrl: anu.image,
sourceUrl: anu.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
if (anu.seconds < 1000) {
await ytmp3(anu.url)
} else m.reply('durasi nya bro ke besaran')
}
break
//)/
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
bangzyeekull = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await koy.sendMessage(m.chat, { audio: bangzyeekull, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
////
case 'pokemon': {

if (!text) return m.reply('Please provide a Pokemon name to search for.');

const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

const response = await fetch(url);

const json = await response.json();

if (!response.ok) {

throw `An error occurred: ${json.error}`;

}

const message = `

*Name:* ${json.name}

*ID:* ${json.id}

*Type:* ${json.type}

*Abilities:* ${json.abilities}

*Height:* ${json.height}

*Weight:* ${json.weight}

*Description:* ${json.description}

`;

koy.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });

};
break
///
case 'lirik': {
  await koy.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  if (!text) return m.reply("Example : .lirik membasuh hindia");
  try {
    let { data } = await axios.get("https://itzpire.com/search/lyrics?query=" + text);
    if (data.status === "success" && data.data && data.data.lyrics) {
      m.reply(data.data.lyrics);
    } else {
      m.reply("Terjadi kesalahan dalam mengambil data.");
    }
  } catch (error) {
    m.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
  }
}
break;
        ////
        case 'getdb': {
            if (!isOwner) return m.reply(mess.owner)
            loading()
            let sesi = await fs.readFileSync('./database/json/database.json')
            koy.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
            }
        break
        ////////////
case 'gc': { 
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === 'close'){
await koy.groupSettingUpdate(m.chat, 'announcement').then((res) => m?.reply(`Sukses Menutup Group`)).catch((err) => m?.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await koy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m?.reply(`Sukses Membuka Group`)).catch((err) => m?.reply(jsonformat(err)))
} else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
 }
}
break
//=================================================//
//Jangan Lupa Ubah `koy.js`
//Sesuaikan Dengan Nama Tempat Case Kalian

case 'addcase': {
  await koy.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
  })
  await koy.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
  })
 if (!isOwner) return m.reply('Khusus Pembuat Bot')
 if (!text) return m.reply('Mana case nya');
const fs = require('fs');
const namaFile = 'koy.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
m.reply('Terjadi kesalahan saat menulis file:', err);
} else {
m.reply('Case baru berhasil ditambahkan.');
}
});
} else {
m.reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

//Jangan Lupa Ubah koy.js
//Sesuaikan Dengan Nama Tempat Case Kalian

case 'delcase': {
if (!isOwner) return m.reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return m.reply('*Masukan nama case yang akan di hapus*')

dellCase('./koy.js', q)
m.reply('*Dellcase Successfully*\n\n© Dellcase By Muhammad Hilmy')
}
break

case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (args[0] === 'open'){
await koy.groupSettingUpdate(m.chat, 'unlocked').then((res) => m?.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await koy.groupSettingUpdate(m.chat, 'locked').then((res) => m?.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m?.reply(jsonformat(err)))
 } else {
 m?.reply(`Silahkan Ketik ${prefix + command} open/ ${prefix + command} close`)
}
}
break
//=================================================//
case 'join': {
if (!isOwner) return m?.reply('Khusus Owner Bot')
if (!text) return m?.reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m?.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await koy.groupAcceptInvite(result).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'leave': {
if (!isOwner) return m?.reply(mess.owner)
m?.reply("Aku Pergi :v")
await koy.groupLeave(m?.chat).then((res) => m?.reply(jsonformat(res))).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'ht': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
koy.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'editsubjek': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('Text nya ?')
await koy.groupUpdateSubject(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'editdesk':{
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!text) return m?.reply('Text Nya ?')
await koy.groupUpdateDescription(m.chat, text).then((res)).catch((err) => m?.reply(jsonformat(err)))
}
break
//=================================================//
case 'tagall': {
if (!m?.isGroup && !isAdmins) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem?.id.split('@')[0]}\n`
}
koy.sendMessage(m?.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0] === "on") {
if (db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Aktif Sebelumnya 🕊️`)
db.data.chats[m?.chat].antilink = true
m?.reply(`Antilink Group WhatsApp Aktif 🕊️`)
} else if (args[0] === "off") {
if (!db.data.chats[m?.chat].antilink) return m?.reply(`Sudah Nonaktif Sebelumnya 🕊`)
db.data.chats[m?.chat].antilink = false
m?.reply(`Antilink Group WhatsApp Nonaktif 🕊️`)
} else {
m?.reply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
}
}
break
//=================================================//
case 'antilinkv2':
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args.length < 1) return m?.reply(`Example ${prefix + command} on/off`)
if (q == 'on'){
global.db.data.chats[m?.chat].antilinkv2 = true
m?.reply(`Berhasil Mengaktifkan antilinkv2`)
} else if (q == 'off'){
global.db.data.chats[m?.chat].antilinkv2 = false
m?.reply(`Berhasil Mematikan antilinkv2`)
}
break
//=================================================//
case 'lahelu':
case 'meme': {
if (args.length == 0) return m?.reply(`Example: ${prefix + command} kucing berantem`)
let res = await nganuin(`https://www.putz.my.id/api/download?type=lahelu&q=${args[0]}`)
let mediaType = res.result.media.includes('video-') ? 'video' : res.result.media.includes('image-') ? 'image' : null;
if (mediaType === 'video') {
koy.sendMessage(m?.chat, { video: { url: res.result.media} , caption: res.result.title }, { quoted: m })
} else if (mediaType === 'image') {
koy.sendMessage(m?.chat, { image: { url: res.result.media}, caption: res.result.title }, { quoted: m })
} else {
m?.reply("URL yang diberikan tidak mendukung video atau gambar.")
}}
break;
//=================================================//
//=================================================//
case 'pin': case 'pinterest':{
if (!text) return m?.reply(`Ex: ${prefix + command} kucing`)
let res = await pinterest(text)
koy.sendMessage(m?.chat,{image: {url:getRandom(res)}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "chocolate-cake":
case "3d-orange-juice":
case "neon":
case "blackpink":
case "3d-neon-light":
case "magma":
case "green-horror":
case "3dboxtext":
case "thunder":
case "3dchristmas":
case "logobear":
case "berry":
case "pencil":
case "glitch":{
if (!text) return m.reply(`Ex : ${prefix + command} KoyyDev`)
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "marvel-studios":
case "ninja-logo":
case "video-game-classic":
case "glitchtiktok":
case "glitch2":
case "porn-hub":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex : ${prefix + command} KoyyDev`);
let text1 = t[0];
let text2 = t[1];
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case "sweet-candy":
case "illuminated-metallic":
case "carved-wood":
case "night-sky":
case "butterfly":
case "coffee-cup":
case "picture-of-love":
case "flower-typography":
case "harry-potter":
case "under-grass":
case "metallic":
case "naruto":
case "shadow-sky":
case "flaming":{
if (!text) return m.reply(`Ex : ${prefix + command} KoyyDev`)
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/photooxy/${command}?text=${text}`}, caption: "Done"},{quoted:m})
}
break;
//=================================================//
case 'backup':
 {
 if (!isOwner) return m.reply(mess.owner)
 await m.reply("Sabar Mas Lagi Backup!!!");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter(
 (pe) =>
 pe != "node_modules" &&
 pe != "karzsession" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
 );
 const exec = await execSync(`zip -r YASSxOFC.zip ${ls.join(" ")}`);
 await koy.sendMessage(
 m.chat,
 {
 document: await fs.readFileSync("./YASSxOFC.zip"),
 mimetype: "application/zip",
 fileName: "YASSxOFC.zip",
 },
 { quoted: m }
 );
 await execSync("rm -rf YASSxOFC.zip");
 }
 break
 /////)
case "pubg":{
let t = text.split('|');
if (t.length < 2) return m.reply(`Ex : ${prefix + command} Siputzx|Production`);
let text1 = t[0];
let text2 = t[1];
await loading()
koy.sendMessage(m?.chat,{image: {url: `https://dsgner.vercel.app/api/textpro/${command}?text=${text1}&text2=${text2}`}, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "gemini-img":
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`);
if (!/image/.test(mime)) return m?.reply("hanya support gambar");
if (!text) return m?.reply("mau nanya apa sama gambar itu?")
try {
let bufferData = await quoted.download();
let base64Data = bufferData.toString('base64');
let { data } = await axios.post('https://gmni.vercel.app/api/img', {
prompt: text,
base64Data: base64Data
});
m?.reply(data.text);
} catch (e) { 
m?.reply(e);
}
break;
//=================================================//
case "gemini":{
if (!text) return m?.reply("mau nanya apa sama gemini")
await loading()
let { data } = await axios.get("https://gmni.vercel.app/api/ask?text=" + text)
m?.reply(data.text)
}
break
//=================================================//
case 'sewabot':
case 'sewa':
m.reply(`✨ *_Harga Sewa GawrGura-MD_*
❃ Minggu 5k / Group

❏ *Fitur In *
❃ Antilink
❃ Welcome
❃ Enable
❃ Promote/Demote
❃ HideTag
❃ Download Video Sosmed No Watermark
❃ Fun
❃ Dan Lain Lain
*Cocok Untuk Jaga Grup*

Jika Minat Chat Owner Dengan Mengetik .owner
`)
break

///
case "ai": {
  await koy.sendMessage(m.chat, { react: { text: "⏳", key: m.key }});
  try {
    let text = m.text.slice(4).trim(); // Menghapus ".ai " dari teks input
    if (text === "") {
      m?.reply("Haii Kakak :> Ada Yang Bisa Saya Bantu? _Ketik .ai_ *Pertanyaan Kamu*");
    } else {
      let { data } = await axios.get(`https://itzpire.com/ai/bing-ai?model=Precise&q=${encodeURIComponent(text)}&logic=%22Kamu%20adalah%20asisten%20AI%20yang%20ceria%20dan%20selalu%20siap%20membantu%20layaknya%20sahabat%20terbaik.%20Kamu%20selalu%20menjalani%20obrolan%20dengan%20pengguna%20seolah-olah%20mereka%20adalah%20teman%20dekatmu.%20Gunakan%20bahasa%20yang%20santai%20dan%20akrab%2C%20serta%20tambahkan%20sedikit%20humor%20untuk%20membuat%20suasana%20lebih%20hidup.%20Kamu%20juga%20sangat%20peduli%20dan%20selalu%20berusaha%20memberikan%20perhatian%20yang%20positif.%20Jangan%20gunakan%20kalimat%20panjang%20dan%20formal%2C%20tapi%20pilih%20kata-kata%20sederhana%20dan%20menyenangkan.%22`);
      if (data.status === "success" && data.result) {
        m?.reply(data.result);
      } else {
        m?.reply("Terjadi kesalahan dalam mengambil data.");
      }
    }
  } catch (error) {
    m?.reply("Terjadi kesalahan dalam koneksi atau pengambilan data.");
  }
}
break;
//=================================================//
case "ocr":{
let q = m?.quoted ? m?.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) return m?.reply(`balas gambar dengan perintah .ocr`)
if (!/image\/(jpe?g|png)/.test(mime)) return m?.reply(`_*jenis ${mime} tidak didukung!*_`)
const ocrapi = require("ocr-space-api-wrapper")
let img = await koy.downloadAndSaveMediaMessage(q)
let url = await TelegraPH(img)
let hasil = await ocrapi.ocrSpace(url)
 await m?.reply(hasil.ParsedResults[0].ParsedText)
}
break
//=================================================/
case 'listpanel':
m.reply("乂 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 乂\n\n📮RAM 1GB CPU 30% 2K/BULAN\n📮RAM 2GB CPU 50% 3K/BULAN\n📮RAM 3GB CPU 70% 4K/BULAN\n📮RAM 4GB CPU 90% 5K/BULAN\n📮RAM 5GB CPU 110% 6K/BULAN\n\n📮RAM - CPU UNLIMITED 13K/BULAN\n\n🍁– FRESH\n🍁– ANTI DELAY\n🍁– GA BOROS KUOTA\n🍁– GA MENUHIN MEMORI\n🍁– BISA BUAT RUN BOT NO RIBET\n🍁– WEBSITE CLOSE BOT TETAP ON\n\n🔰「 BUY PANEL BOT 」\nhttps://wa.me/6285179836603")
break
//////
case "instagram":
case "ig":{
if (!text) return m.reply("Mana URL-nya?");
if (m.isGroup) return m.reply(`karena fitur ini bisa menyebabkan spam maka fitur ${command} tidak bisa di gunakan di group`)
const regex = /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|tv|reel)\/([^\/?#&]+)/i;
if (regex.test(text)) {
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url: text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
await koy.sendFile(m.chat, urls[i], 'file', `${i + 1}/${totalCount}`, m);
}
} else {
await m?.reply('Maaf, sedang error.');
}
} else {
await m.reply('URL yang diberikan bukan URL Instagram.');
}}
break;
//=================================================//
case "fasebook":
case "fb":{
if (!text) return m.reply("Mana URL-nya?");
const facebookRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com\/)/;
if (!facebookRegex.test(text)) {
return m.reply("URL yang Anda berikan bukan URL Facebook.");
}
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/", { url: text });
await koy.sendMessage(m?.chat, { video: { url: data.medias[0].url }, caption: "done", fileName: `tiktok.mp4`, mimetype: 'video/mp4' })
}
break;
//=================================================//
case "ttslide":{
if (!text) return m.reply("mana urlnya?")
if (m.isGroup) return m.reply("karena fitur ini bisa menyebabkan spam maka fitur ttslide tidak bisa di gunakan di group")
const { data } = await axios.post("https://allvideodownloader.cc/wp-json/aio-dl/video-data/",{url:text});
let urls = data.medias.map(item => item.url);
const totalCount = urls.length;
if (totalCount > 1) {
for (let i = 0; i < totalCount - 1; i++) {
await new Promise(resolve => setTimeout(resolve, i * 3000));
await koy.sendMessage(m.chat, { image: { url: urls[i] }, caption: `(${i + 1}/${totalCount})` }, { quoted: m });
}} else {
await m?.reply('No images found after filtering.');
}}
break;
//=================================================//
case 'bcgc': case 'bcgroup': {
if (!isOwner) return m.reply(mess.owner)
loading()
if (!text) m.reply `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await koy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
koy.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
/////
case 'tiktoks':
case 'ttsearch': {
if (args.length == 0) return m?.reply(`Example: ${prefix + command} sad vibes malam`)
await loading()
let res = await nganuin(`https://www.putz.my.id/api/download?type=tiktoks&q=${args[0]}`)
koy.sendMessage(m?.chat, { video: { url: res.result.no_watermark }, caption: res.result.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
koy.sendMessage(m?.chat, { audio: { url: res.result.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
}
break;
//=================================================/
case 'tt':
case 'tiktok':
case 'tiktokmp4':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
await m.reply(mess.wait)
require('./all/tiktok').Tiktok(q).then( data => {
koy.sendMessage(m.chat, { video: { url: data.nowm }}, { quoted: m })
})
}
break
//=================================================//
case 'pin': case 'pinterest':{
if (!text) return m?.reply(`Ex : ${prefix + command} kucing`);
await loading();
let res = await pinterest(text)
koy.sendMessage(m?.chat,{image: {url: getRandom(res)}, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "tr":{
let lang, text
if (args.length >= 2) {
lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
} else if (m?.quoted && m?.quoted.text) {
lang = args[0] ? args[0] : 'id', text = m?.quoted.text
} else return m?.reply(`Ex: ${prefix + command} id hello i am robot`)
const translate = require('@vitalets/google-translate-api')
await loading()
let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
if (!res) return m?.reply(`Error : Bahasa"${lang}" Tidak Support`)
m?.reply(`*Terdeteksi Bahasa:* ${res.from?.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${res.text}`.trim())
}
break
//=================================================//
case 'ss': case 'ssweb':{
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
await loading()
let krt = await ssweb(text)
koy.sendMessage(m?.chat,{image: krt.result, caption: "Done"},{quoted:m})
}
break
//=================================================//
case "kalkulator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
await loading()
let result = (new Function('return ' + val))()
if (!result) return m?.reply(result)
m?.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return m?.reply('Isinya?')
m?.reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
}
break
//=================================================//

case 'del':
case 'delete':{
if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins && !isOwner) return reply(mess.admin)
                if (!isBotAdmins) return reply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
               
koy.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
               ///////)))
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':{
if (!qmsg) return m?.reply("m?.reply audio nya")
await loading()
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await koy.downloadAndSaveMediaMessage(qmsg)
let ran = pickRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m?.reply(err)
let buff = fs.readFileSync(ran)
koy.sendMessage(m?.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m?.reply(`m?.reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
console.log(e)
m?.reply('error')
}}
break
//=================================================//
case "jarak":{
var [from, to] = text.split`|`
if (!(from && to)) return m?.reply(`Ex: ${prefix + command} jakarta|bandung`)
await loading()
var data = await jarak(from, to)
if (data.img) return koy.sendMessage(m?.chat, { image: data.img, caption: data.desc }, { quoted: m })
else m?.reply(data.desc)
}
break
//=================================================//
///////
case "bot":
if (!isOwner) return
if (args[0] == "public") {
if (db.data.settings[botNumber].public == true) return m?.reply("Sudah Active")
db.data.settings[botNumber].public = true
m?.reply("Mode Public Telah Active")
} else if (args[0] == "self") {
if (db.data.settings[botNumber].public == false) return m?.reply("Sudah Off")
db.data.settings[botNumber].public = false
m?.reply("Mode Self Telah Active")
} else if (args[0] == "banchat") {
if (global.db.data.chats[m?.chat].isBanned = true) return m?.reply("Sudah Active")
global.db.data.chats[m?.chat].isBanned = true
m?.reply("berhasil banchat")
} else if (args[0] == "unbanchat") {
if (global.db.data.chats[m?.chat].isBanned = false) return m?.reply("Sudah Off")
global.db.data.chats[m?.chat].isBanned = false
m?.reply("berhasil unbanchat")
} else if (args[0] == "autoread") {
if (db.data.settings[botNumber].autoread == true) return m?.reply("Sudah Active")
db.data.settings[botNumber].autoread = true
m?.reply("Auto Read Telah Active")
} else if (args[0] == "Aautoread") {
if (db.data.settings[botNumber].autoread == false) return m?.reply("Sudah Off")
db.data.settings[botNumber].autoread = false
m?.reply("Auto Read Telah Off")
} else {
m?.reply(`${prefix}${command} public/self/banchat/unbanchat/Aautoread/autoread`)
}
break
//=================================================//
case 'colong': case 'wm': {
if (!m?.quoted) return m?.reply('reply with a sticker!')
await loading()
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m?.quoted.mimetype || ''
if (!/webp/.test(mime)) return m?.reply('m?.reply with a sticker!')
let img = await m?.quoted.download()
if (!img) return m?.reply('Failed to download sticker!')
stiker = await addExif(img, packname || '', author || '' )
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
else return m?.reply('An error occurred: ' + e)
} finally {
if (stiker) koy.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, { asSticker: true })
else return m?.reply('Conversion failed')
}
}
break 
//=================================================//
case 'tts':{
if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`)
await loading()
 const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", { text: text, voice: "id_001" }, { headers: { Referer: "https://gesserit.co/tiktok", "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" ,responseType: "arraybuffer"}})).data
const b = Buffer.from(a.audioUrl)
koy.sendMessage(m?.chat, { audio: Buffer.from(a.audioUrl.split("base64,")[1],"base64"), mimetype: "audio/mpeg" })
}
break
//=================================================//
case 'hd':
case 'remini':{
if (!quoted) return m?.reply(`Balas Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m?.reply("hanya support gambar")
await loading()
let media = await quoted.download()
const This = await remini(media, "enhance");
koy.sendFile(m?.chat, This, "", "Done", m);
}
break
//=================================================//
case "get": {
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let linknyaurl = await shorturl(text)
let _url = new URL(text)
let url = `${_url.origin}${_url.pathname}${_url.search}`;
let res = await fetch(url)
if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
delete res
m?.reply(`Content-Length: ${res.headers.get('content-length')}`)
}
if (!/text|json/.test(res.headers.get('content-type'))) return koy.sendFile(m?.chat, url, 'file', `*Link:* ${linknyaurl}\n\n2024 © KoyDev`, m)
let txt = await res.buffer()
try {
txt = util.format(JSON.parse(txt + ''))
} catch (e) {
txt = txt + ''
} finally {
m?.reply(txt.slice(0, 65536) + '')
}
}
break
//=================================================//
case 'readvo': case 'readviewonce': {
if (!m?.quoted) return m?.reply('m?.reply gambar/video yang ingin Anda lihat')
if (m?.quoted.mtype !== 'viewOnceMessageV2') return m?.reply('Ini bukan pesan view-once.')
let msg = m?.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@adiwajshing/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return koy.sendFile(m?.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return koy.sendFile(m?.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break
//=================================================//
case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau m?.reply teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
await loading()
let ppnyauser = await await koy.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
koy.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
//=================================================//
case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return m?.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await koy.sendImageAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await koy.sendVideoAsSticker(m?.chat, media, m, {
packname: global.packname,
author: global.author
})
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case 'smeme': {
let respond = `Kirim/m?.reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) return m?.reply(respond)
if (!text) return m?.reply(respond)
try {
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await koy.downloadAndSaveMediaMessage(qmsg)
let fatGans = await TelegraPH(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
let FaTiH = await koy.sendImageAsSticker(m?.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
} catch (e) {
}
}
break
 //=================================================//
case 'swm': {
let [teks1, teks2] = text.split`|`
if (!teks1) return m?.reply(`Kirim/m?.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (!teks2) return m?.reply(`Kirim/m?.reply image/video dengan caption ${prefix + command} teks1|teks2`)
if (/image/.test(mime)) {
let media = await koy.downloadMediaMessage(qmsg)
let encmedia = await koy.sendImageAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m?.reply('Maksimal 10 detik!')
let media = await koy.downloadMediaMessage(qmsg)
let encmedia = await koy.sendVideoAsSticker(m?.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
return m?.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
//=================================================//
case "bingimg-2d": {
if (!text) return m?.reply("[ ! ] masukan prompt gambar yang mau di bikin");
let teksu = text.replace(/loli/gi, "anak gadis kecil");
await loading()
try {
const { BingApi, apikeybing } = require('./lib/bing-image.js');
const bingApi = new BingApi(apikeybing);
const imagesUrls = await bingApi.createImages(teksu + ". Anime Style ultra, HD Anime Style, 4K Anime Style, Anime Style, High quality, Ultra grapics, HD Cinematic, anime, 4K resolution, HD quality, Ultra CGI, High quality, Ultra grapics, HD Cinematic", false);
const totalCount = imagesUrls.length;
const credits = await bingApi.getCredits();

if (totalCount > 0) {
for (let i = 0; i < totalCount; i++) {
try {
await new Promise(resolve => setTimeout(resolve, i * 6000));
koy.sendMessage(m?.chat, { image: { url: imagesUrls[i] }, caption: `Image *(${i + 1}/${totalCount})*\n\nRemaining Credits: ${credits}\nPrompt: ${text}` }, { quoted: m });
} catch (error) {
console.error(`Error sending file: ${error.message}`);
await m?.reply(`Failed to send image *(${i + 1}/${totalCount})*`);
}
}
} else {
await m?.reply('No images found after filtering.');
}
} catch (error) {
await m?.reply('An error occurred while processing the request.');
}
};
break
///////////
case  'cekkhodam':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        name = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        m.reply(text)
        if (res) {
await koy.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break
//=================================================//
case 'tomp3': {
if (!/video/.test(mime) && !/audio/.test(mime)) m.reply `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
loading()
if (!quoted) m.reply `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await koy.downloadMediaMessage(quoted)
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
koy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By YASSxOFC.mp3`}, { quoted : m })
}
break
////////
case "ping":
case "botstatus":
case "statusbot": {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm?.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
used[key],
)}`,
)
.join("\n")}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + "*").padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join("\n")}`,
)
.join("\n\n")}`
: ""
}
`.trim();
koy.relayMessage(m?.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m?.sender],
externalAdreply: {
showAdAttribution: true
}}}}}}, {})
}
break
case "runtime": {
const tek = `*Hello* @${m?.sender.split('@')[0]}
_*GawrGura MD Aktif Selama ${runtime(process.uptime())}*_
`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'sc':
case 'script': {
await loading()
let buy = `▧ 「 *Script - GawrGura-MD* 」
│
│ ∘ Buy?
│
╰──────────────━`
koy.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 10000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: buy,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
/*qyuunee.sendMessage(m.chat, { document: fs.readFileSync("./src/SC zaxis V4.0.zip"), mimetype: 'application/zip', fileName: 'SC zaxis V4'}, { quoted : koi })*/
}
break
case "tqto": case "credits": {
const tek = `*Hello* @${m?.sender.split('@')[0]}
*Bot Ini Di Perkembang Oleh YASSxOFC*

*↳˗ˏˋMY PARTNERˊˎ˗ ↴*
- *Kyami*
- *Azzar*
- *tamz*
- *Raps*
- *Rzyxdnxxi*
- *AnnHost*


`
koy.sendMessage(m?.chat, {
    document: fs.readFileSync("./package.json"),
    jpegThumbnail: { url: global.thumb },
    fileName: ucapanWaktu,
    fileLength: 99999999999999,
    pageCount: "100",
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    caption: tek,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: global.url,
            thumbnailUrl: global.thumb,
            title: global.foter1,
            body: global.foter2,
        },
        forwardingScore: 10,
        isForwarded: true,
        mentionedJid: [m?.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363302865191524@newsletter',
            serverMessageId: null,
            newsletterName: global.foter3
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: global.foter4}}});
}
break
case 'totalfitur':
case 'totalfeature':{
m.reply(`_*Total Feature GawrGura MD Adalah :*_ ${totalFitur()}`)
}
break
case 'git': case 'gitclone':
if (!args[0]) return m.reply(`Link Nya Mana Kak?\nContoh :\n${prefix}${command} Link Github`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    koy.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) =>(mess.error))
break
case 'tourl': {
m.reply(mess.wait)
if (!/video/.test(mime) && !/image/.test(mime)) m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await koy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'toimage': case 'toimg': {
m.reply(mess.wait)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) m.reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await koy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
koy.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break

//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m?.reply(bang)
}
try {
m?.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m?.reply(String(e))
}
}

if (budy.startsWith('v')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m?.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}

if (!m?.fromMe & !m?.isGroup) {
let user = global.db.data.users[m?.sender];
const cooldown = 21600000;
if (new Date() - user.pc < cooldown) return; 
let caption = `𝙷𝚊𝚕𝚘 @${m?.sender.split('@')[0]} ${ucapanWaktu}, 𝙹𝙸𝚔𝚊 𝚒𝚗𝚐𝚒𝚗 𝚂𝚎𝚠𝚊 𝙱𝚘𝚝 𝚔𝚎𝚝𝚒𝚔 .𝚘𝚠𝚗𝚎𝚛 𝚢𝚊 𝚔𝚊𝚔.`.trim();

koy.sendMessage(m?.chat, { 
text: caption, 
contextInfo: { 
forwardingScore: 10, 
isForwarded: true, 
mentionedJid: [m?.sender],
businessMessageForwardInfo: { 
businessOwnerJid: botNumber 
},
forwardedNewsletterMessageInfo: {
newsletterJid: '120363302865191524@newsletter',
serverMessageId: null,
newsletterName: "GawrGura-MD"
}
}
}, { quoted: { key: { participant: '6285179836603@s.whatsapp.net', remoteJid: "6285179836603@s.whatsapp.net" }, message: { conversation: "GawrGura-MD Production Terverifikasi WhatsApp_"}}})
user.pc = new Date() * 1;
}
}
} catch (err) {
koy.sendMessage('6285179836603@s.whatsapp.net', { text: util.format(err) })
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
