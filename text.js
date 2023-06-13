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


const fs = require('fs')
const { color } = require('./function/color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'Script Ini Buatan KrisBotz Jangan Hapus Credit Nya'`, 'blue'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
