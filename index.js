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

require('./Pengaturan/Admin/settings')
const { default: krisConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto }= require('@adiwajshing/baileys')
const { Boom } = require('@hapi/boom')
const chalk = require('chalk')
const fs = require('fs')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const process = require('process')
const pino = require('pino')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor } = require('./Pengaturan/function/color')
const { uncache, nocache } = require('./Pengaturan/text')
const { state } = useSingleFileAuthState(`./Pengaturan/function/Kris_Session/session.json`)
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./Pengaturan/function/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./Pengaturan/function/myfunc')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })       

require('./kris.js')
nocache('../kris.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), '𝙵𝚒𝚕𝚎 𝙳𝚒 𝙿𝚎𝚛𝚋𝚊𝚛𝚞𝚒!!!'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), '𝙵𝚒𝚕𝚎 𝙳𝚒 𝙿𝚎𝚛𝚋𝚊𝚛𝚞𝚒!!!'))

async function krisBot() {
const { version, isLatest } = await fetchLatestBaileysVersion()
const kris = krisConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['krisBotz-MD','Safari','1.0.0'],
auth: state,
version
})

store.bind(kris.ev)

console.log(color(figlet.textSync(`krisBotz`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'green'))

kris.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

kris.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
kris.sendNode({
  tag: 'call',
    attrs: {
      from: '62882007324217@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})

if (json.content[0].tag == 'offer') {
let qutsnya = await kris.sendContact(callerId, global.owner) 
await kris.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await kris.updateBlockStatus(callerId, "block")
}
})
    
    
kris.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!kris.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(kris, kay, store)
require('./kris')(kris, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

kris.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await kris.groupMetadata(anu.id)
let participants = anu.participants
let memb = metadata.participants.length
for (let num of participants) {
try {
ppuser = await kris.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ppuser = await reSize(ppuser, 300, 300)

let nama = await kris.getName(num)
memb = metadata.participants.length    
if (anu.action == 'add') {    
let buttons = [
               {buttonId: `.hmalak`, buttonText: {displayText: 'WELCOME TO'}, type: 1},                                ]  
kris.sendMessage(anu.id,  { image: ppuser, buttons, caption: `───「 *SELAMAT DATANG* 」────

📛 Nama : ${nama}
☎️ Nomor : @${num.split("@")[0]}
🥉 Member Ke : ${memb}
🔰 Group : ${metadata.subject}

📝 *DESC* : ${metadata.desc}`} )
} else if (anu.action == 'remove') {            
let buttons = [
               {buttonId: `.hmalak`, buttonText: {displayText: 'GOODBYE'}, type: 1},                      
kris.sendMessage(anu.id, { image: ppuser, buttons, caption: `Goodbye @${num.split("@")[0]} Moga Tenang Di Alam Sana` })
}
}
} catch (err) {
console.log(err)
}
})

kris.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

kris.ev.on('contacts.update', update => {
for (let contact of update) {
let id = kris.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

kris.getName = (jid, withoutContact  = false) => {
id = kris.decodeJid(jid)
withoutContact = kris.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = kris.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === kris.decodeJid(kris.user.id) ?
kris.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

kris.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

kris.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await kris.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await kris.getName(i + '@s.whatsapp.net')}\n
FN:${await kris.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
kris.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

kris.setStatus = (status) => {
kris.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

kris.public = true

kris.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await kris.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

kris.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await kris.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

kris.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await kris.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

kris.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await kris.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

kris.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

kris.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

kris.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './Pengaturan/function' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

kris.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await kris.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./Pengaturan/function/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await kris.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

kris.sendText = (jid, text, quoted = '', options) => kris.sendMessage(jid, { text: text, ...options }, { quoted })

kris.serializeM = (m) => smsg(kris, m, store)

kris.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); kris.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); krisBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); krisBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); kris.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); kris.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); krisBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); krisBot(); }
else kris.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})

kris.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
kris.sendMessage(jid, buttonMessage, { quoted, ...options })
}

kris.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: kris.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `62882007324217@s.whatsapp.net`
}
}, options)
return kris.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

kris.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
kris.relayMessage(jid, template.message, { messageId: template.key.id })
}

return kris
}

krisBot()
