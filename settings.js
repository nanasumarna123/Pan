/*Halo Saya KrisBotz Nama Asli Saya Krisdi Firmansyah 
Asal Dari Cikamuning Kabupaten Brebes Jawa Tengah
Script Hasil Copy Paste Masih Belajar, Jadi Script Jangan Di Jual Ya
Terimakasih....

[ CREDIT ]
Nama : Krisdi Firmansyah / KrisBotz
Pembuat Sc : KrisBotz
Base : KrisBotz
Tiktok Saya : Kris01Real
Grup Wa : https://chat.whatsapp.com/E34l6aS0pZZ7MoXoWeddg8
Nomor Admin 62882007324217 / 6285786211623
_____________
Tolong Jangan Di Hapus Hargai Pembuat Sc
Tambahin Nama Lu Aja Gak Papa Salam Dari KrisBotz*/


const chalk = require("chalk")
const fs = require("fs")

//______________________[ PERLENGKAPAN ]_______________________//
global.owner = '62882007324217' //Ganti Jadi No Lu
global.ownerNomor = '62882007324217'
global.botname = '𝐊𝐫𝐢𝐬𝐁𝐨𝐭𝐳-𝐌𝐝' //Ganti Jadi Nama Bot Lu
global.ownername = '𝐊𝐫𝐢𝐬 𝐇𝐨𝐬𝐭𝐢𝐧𝐠' //Ganti Jadi Nama Lu
global.footer = 'KrisBotz'
global.packname = `BotWa` 
global.domain = "https://khusus.denihost.my.id" // Isi Domain Lu
global.apikey = 'ptla_IS1BxulIrC9NBYFvtTa3IzEk10qAVcarg2MNg5hicA2' // Isi Apikey Plta Lu
global.capikey = 'ptlc_kuSKiVULPkOTLwsuLH8Wjwyws1rvMriI6XQq36PUutl' // Isi Apikey Pltc Lu
//______________________[ THUMBNAIL ]_______________________//
global.qrisdana = { url: 'https://telegra.ph/file/6b280356b7e7d6c06fecf.jpg'}
global.qrisgopay = { url: 'https://telegra.ph/file/4173a2840cb92747a50e1.jpg'}
global.krismenu = { url: 'https://telegra.ph/file/e79f735a244151fe186e7.jpg' } //Gak Usah Di Ganti
global.qrisdonate = { url: 'https://telegra.ph/file/d2548c6f84f14b5faf9d4.jpg' } //Gak Usah Di Ganti
global.antilink = false

global.mess = {
    wait: 'Proses Tunggu Hela',
    succes: 'Tugas Selesai Tuh',
    admin: 'Khusus Admin Grup Wahh',
    botAdmin: 'Bot Nya Aja Gak Admin Duh',
    owner: 'Ada Siapa Ini Khusus Owner Ku',
    group: 'Fitur Untuk Grup Anjay',
    private: 'Fitur Cuma Bisa Di Vrivate Chat',
    bot: 'Bot Number User Special Features!!!',
    error: 'Anjay Eror...',
    sewa: 'Maaf Kamu Belum Sewa Bot Ini Silahkan Klik Sewa Di Bawah Untuk Order / Sewa Bot',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})