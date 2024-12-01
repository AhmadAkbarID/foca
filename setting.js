/*BASE ORI PAKOYOFFC
RECODE BY : Kyami Silence
Buy panel ? Chat wa.me/6285179836603
Jangan Di Hapus Credit Gw
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285187063723'
global.nomerowner = ["6285187063723"]

//watermark 
global.packname = '6285187063723'
global.author = '6285187063723'
global.foter1 = '𝚂𝚒𝚖𝚙𝚕𝚎 𝙱𝚘𝚝 𝙱𝚢 6285187063723'
global.foter2 = 'Created By 6285187063723'
global.foter3 = '6285187063723'
global.foter4 = '6285187063723'
global.idcennel = '-'
global.thumb = 'https://pomf2.lain.la/f/blbepv.jpg'
global.url = '-'
//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

// APIKEY

global.skizoapi = 'KiiCode'
global.lol = 'GataDios'

//mess
global.mess = {
    success: '𝙳𝚘𝚗𝚎 𝙺𝚊𝚔 ',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*Wait Tunggu Sebentar*_',
    notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    premium: '_*khusus Premium" Mau Prem? Chat Owner_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})