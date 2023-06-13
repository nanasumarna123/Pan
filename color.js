/*Halo Saya KrisBotz Nama Asli Saya Krisdi Firmansyah 
Asal Dari Cikamuning Kabupaten Brebes Jawa Tengah
Script Hasil Copy Paste Masih Belajar, Jadi Script Jangan Di Jual Ya
Terimakasih....

[ CREDIT ]
Nama : Krisdi Firmansyah / KrisBotz
Pembuat Sc : KrisBotz
Base : KrisBotz
Tiktok Saya : Kris01Real
Grup Wa : -
_____________
Tolong Jangan Di Hapus Hargai Pembuat Sc
Tambahin Nama Lu Aja Gak Papa Salam Dari KrisBotz*/
const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
