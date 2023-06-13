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
Nomor Admin 6288200732427 / 6285786211623
_____________
Tolong Jangan Di Hapus Hargai Pembuat Sc
Tambahin Nama Lu Aja Gak Papa Salam Dari KrisBotz*/

require("./Pengaturan/Admin/settings");const{BufferJSON,WA_DEFAULT_EPHEMERAL,generateWAMessageFromContent,proto,generateWAMessageContent,generateWAMessage,prepareWAMessageMedia,areJidsSameUser,getContentType}=require("@adiwajshing/baileys"),axios=require("axios"),baileys=require("@adiwajshing/baileys"),chalk=require("chalk"),cheerio=require("cheerio"),child_process=require("child_process"),crypto=require("crypto"),cookie=require("cookie"),FormData=require("form-data"),FileType=require("file-type"),fetch=require("node-fetch"),fs=require("fs"),util=require("util"),ytdl=require("ytdl-core"),syntaxerror=require("syntax-error"),fsx=require("fs-extra"),ffmpeg=require("fluent-ffmpeg"),Jimp=require("jimp"),jsobfus=require("javascript-obfuscator"),PhoneNumber=require("awesome-phonenumber"),process=require("process"),ms=require("ms"),moment=require("moment-timezone"),speed=require("performance-now"),krisleys=require("@adiwajshing/baileys"),vm=require("node:vm"),{clockString,tanggal,getTime,isUrl,sleep,runtime,fetchJson,getBuffer,jsonformat,format,reSize,generateProfilePicture}=require("./Pengaturan/function/myfunc"),{addResponList,delResponList,isAlreadyResponList,isAlreadyResponListGroup,sendResponList,updateResponList,getDataResponList}=require("./Pengaturan/function/list"),{color,bgcolor}=require("./Pengaturan/function/color"),dblist=JSON.parse(fs.readFileSync("./Pengaturan/database/data.json")),db_respon_list=JSON.parse(fs.readFileSync("./Pengaturan/function/list.json")),addusrp=JSON.parse(fs.readFileSync("./Pengaturan/database/user.json"));global.db=JSON.parse(fs.readFileSync("./Pengaturan/database/database.json")),global.db&&(global.db={sticker:{},database:{},game:{},others:{},users:{},chats:{},...global.db||{}}),module.exports=kris=async(kris,m,chatUpdate,store)=>{try{let gakbisaowner=`${owner}@s.whatsapp.net`,body="conversation"===m.mtype?m.message.conversation:"imageMessage"==m.mtype?m.message.imageMessage.caption:"videoMessage"==m.mtype?m.message.videoMessage.caption:"extendedTextMessage"==m.mtype?m.message.extendedTextMessage.text:"buttonsResponseMessage"==m.mtype?m.message.buttonsResponseMessage.selectedButtonId:"listResponseMessage"==m.mtype?m.message.listResponseMessage.singleSelectReply.selectedRowId:"templateButtonReplyMessage"==m.mtype?m.message.templateButtonReplyMessage.selectedId:"messageContextInfo"===m.mtype?m.message.buttonsResponseMessage?.selectedButtonId||m.message.listResponseMessage?.singleSelectReply.selectedRowId||m.text:"",budy="string"==typeof m.text?m.text:"",prefix=/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body)?body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi):"#",chath="conversation"===m.mtype&&m.message.conversation?m.message.conversation:"imageMessage"==m.mtype&&m.message.imageMessage.caption?m.message.imageMessage.caption:"documentMessage"==m.mtype&&m.message.documentMessage.caption?m.message.documentMessage.caption:"videoMessage"==m.mtype&&m.message.videoMessage.caption?m.message.videoMessage.caption:"extendedTextMessage"==m.mtype&&m.message.extendedTextMessage.text?m.message.extendedTextMessage.text:"buttonsResponseMessage"==m.mtype&&m.message.buttonsResponseMessage.selectedButtonId?m.message.buttonsResponseMessage.selectedButtonId:"templateButtonReplyMessage"==m.mtype&&m.message.templateButtonReplyMessage.selectedId?m.message.templateButtonReplyMessage.selectedId:"listResponseMessage"==m.mtype?m.message.listResponseMessage.singleSelectReply.selectedRowId:"messageContextInfo"==m.mtype?m.message.listResponseMessage.singleSelectReply.selectedRowId:"",content=JSON.stringify(m.message),{type,quotedMsg,mentioned,now,fromMe}=m,isCmd=body.startsWith(prefix),from=m.key.remoteJid,command=body.slice(1).trim().split(/ +/).shift().toLowerCase(),args=body.trim().split(/ +/).slice(1),pushname=m.pushName||"No Name",botNumber=await kris.decodeJid(kris.user.id),groupMetadata=m.isGroup?await kris.groupMetadata(m.chat).catch(e=>{}):"",groupName=m.isGroup?groupMetadata.subject:"",participants=m.isGroup?await groupMetadata.participants:"",itsMe=m.sender==botNumber,text=q=args.join(" "),quoted=m.quoted?m.quoted:m,mime=(quoted.msg||quoted).mimetype||"",jam=moment.tz("asia/jakarta").format("HH:mm:ss"),dt=moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a"),ucapanWaktu="Selamat "+dt.charAt(0).toUpperCase()+dt.slice(1),groupAdmins=m.isGroup?await participants.filter(e=>null!==e.admin).map(e=>e.id):"",groupOwner=m.isGroup?groupMetadata.owner:"",groupMembers=m.isGroup?groupMetadata.participants:"",isBotAdmins=!!m.isGroup&&groupAdmins.includes(botNumber),isGroupAdmins=!!m.isGroup&&groupAdmins.includes(m.sender),isAdmins=!!m.isGroup&&groupAdmins.includes(m.sender),isMedia=/image|video|sticker|audio/.test(mime),isImage="imageMessage"==type,isVideo="videoMessage"==type,isAudio="audioMessage"==type,isSticker="stickerMessage"==type,isQuotedImage="extendedTextMessage"===type&&content.includes("imageMessage"),isQuotedLocation="extendedTextMessage"===type&&content.includes("locationMessage"),isQuotedVideo="extendedTextMessage"===type&&content.includes("videoMessage"),isQuotedSticker="extendedTextMessage"===type&&content.includes("stickerMessage"),isQuotedAudio="extendedTextMessage"===type&&content.includes("audioMessage"),isQuotedContact="extendedTextMessage"===type&&content.includes("contactMessage"),isQuotedDocument="extendedTextMessage"===type&&content.includes("documentMessage"),sender=m.isGroup?m.key.participant?m.key.participant:m.participant:m.key.remoteJid,isOwner=[`${owner}@s.whatsapp.net`]==sender||!!["6285786211623@s.whatsapp.net"].includes(sender),senderNumber=sender.split("@")[0],mentionUser=[...new Set([...m.mentionedJid||[],...m.quoted?[m.quoted.sender]:[]])],mentionByTag="extendedTextMessage"==type&&null!=m.message.extendedTextMessage.contextInfo?m.message.extendedTextMessage.contextInfo.mentionedJid:[],mentionByReply="extendedTextMessage"==type&&null!=m.message.extendedTextMessage.contextInfo&&m.message.extendedTextMessage.contextInfo.participant||"",numberQuery=q.replace(RegExp("[()+-/ +/]","gi"),"")+"@s.whatsapp.net",usernya=mentionByReply||mentionByTag[0],Input=mentionByTag[0]?mentionByTag[0]:mentionByReply||!!q&&numberQuery;try{ppnyaimg=await kris.sendMessage(m.sender,"image")}catch(err){ppnyaimg="https://telegra.ph/file/558480616af8c2f9efa9f.jpg"}if(ppnyaimg=await reSize(ppnyaimg,300,300),!kris.public&&!m.key.fromMe)return;var mdu=["red","green","yellow","blue","magenta","cyan","white"],halalu=mdu[Math.floor(Math.random()*mdu.length)],mdo=["red","green","yellow","blue","magenta","cyan","white"],halalo=mdo[Math.floor(Math.random()*mdo.length)],mdi=["red","green","yellow","blue","magenta","cyan","white"],halali=mdi[Math.floor(Math.random()*mdi.length)],mda=["red","green","yellow","blue","magenta","cyan","white"],halala=mda[Math.floor(Math.random()*mda.length)],mde=["red","green","yellow","blue","magenta","cyan","white"],halale=mde[Math.floor(Math.random()*mde.length)];async function sendkrisMessage(e,t,a={}){let s=await generateWAMessage(e,t,a),i=getContentType(s.message);return"contextInfo"in a&&(s.message[i].contextInfo=a?.contextInfo),"contextInfo"in t&&(s.message[i].contextInfo=t?.contextInfo),await kris.relayMessage(e,s.message,{messageId:s.key.id})}isCmd&&console.log(chalk.yellow.bgCyan.bold(" \uD835\uDE7A\uD835\uDE9B\uD835\uDE92\uD835\uDE9C\uD835\uDE71\uD835\uDE98\uD835\uDE9D\uD835\uDEA3 "),color("[ PESAN MASUK ]",`${halalu}`),color("FROM",`${halalo}`),color(`${pushname}`,`${halali}`),color("Text :",`${halala}`),color(`${body}`,`${halale}`));let rn=["recording","composing"],jd=rn[Math.floor(Math.random()*rn.length)];function simpan(e,t){return fs.writeFileSync(e,t),e}function getRandom(e){return`${Math.floor(1e5*Math.random())}.${e=e||""}`}command&&(kris.sendPresenceUpdate(jd,from),kris.readMessages([m.key]));let pickRandom=e=>e[Math.floor(Math.random()*e.length)],sendContact=(e,t,a,s,i)=>{let n=t.replace(/[^0-9]/g,""),r="BEGIN:VCARD\nVERSION:3.0\nFN:"+a+"\nORG:;\nTEL;type=CELL;type=VOICE;waid="+n+":+"+n+"\nEND:VCARD";return kris.sendMessage(from,{contacts:{displayName:a,contacts:[{vcard:r}]},mentions:i||[]},{quoted:s})},buttonsDefault=[{callButton:{displayText:"Call Owner!",phoneNumber:"+6285786211623"}},{urlButton:{displayText:"Donasi",url:"https://chat.whatsapp.com/EHy3lqpvD8bFDKTdMdrKvy"}},{quickReplyButton:{displayText:"List Menu",id:`${prefix}listmenu`}},{quickReplyButton:{displayText:"All Menu",id:`${prefix}allmenu`}},{quickReplyButton:{displayText:"Sewa",id:`${prefix}sewa`}}],buttonsFirst=[{callButton:{displayText:"Call Owner!",phoneNumber:"+62882007324217"}},{urlButton:{displayText:"Donasi",url:"https://chat.whatsapp.com/EHy3lqpvD8bFDKTdMdrKvy"}},{quickReplyButton:{displayText:"Script",id:`${prefix}sc`}},{quickReplyButton:{displayText:"Sewa",id:`${prefix}sewa`}},{quickReplyButton:{displayText:"Owner",id:`${prefix}owner`}}],buttonsAnon=[{callButton:{displayText:"Call Owner!",phoneNumber:"+6285737134572"}},{urlButton:{displayText:"Donasi",url:"https://chat.whatsapp.com/EHy3lqpvD8bFDKTdMdrKvy"}},{quickReplyButton:{displayText:"Menu",id:`${prefix}menu`}},{quickReplyButton:{displayText:"Sewa",id:`${prefix}sewa`}}],ftext={key:{fromMe:!1,participant:"0@s.whatsapp.net",...from?{remoteJid:"6285786211623@s.whatsapp.net"}:{}},message:{extendedTextMessage:{text:`${m.pushName}`,title:`${m.pushName}`,jpegThumbnail:ppnyaimg}}},reply=e=>{kris.sendMessage(from,{text:e,contextInfo:{forwardingScore:9999999,isForwarded:!0}},{quoted:repPy})},list=[];for(let i of owner)list.push({displayName:await kris.getName(i+"@s.whatsapp.net"),vcard:`BEGIN:VCARD

VERSION:3.0

N:${await kris.getName(i+"@s.whatsapp.net")}

FN:${await kris.getName(i+"@s.whatsapp.net")}

item1.TEL;waid=${i}:${i}

item1.X-ABLabel:Ponsel

item2.EMAIL;type=INTERNET:tesheroku123@gmail.com

item2.X-ABLabel:Email

item3.URL:https://bit.ly/39Ivus6

item3.X-ABLabel:YouTube

item4.ADR:;;Indonesia;;;;

item4.X-ABLabel:Region

END:VCARD`});let addkrisList=(e,t,a,s,i)=>{var n={key:e,response:t,isImage:a,image_url:s};i.push(n),fs.writeFileSync("./Pengaturan/database/data.json",JSON.stringify(i,null,3))},getDatakrisList=(e,t)=>{let a=null;if(Object.keys(t).forEach(s=>{t[s].key===e&&(a=s)}),null!==a)return t[a]},isAlreadykrisList=(e,t)=>{let a=!1;return Object.keys(t).forEach(s=>{t[s].key===e&&(a=!0)}),a},sendkrisList=(e,t)=>{let a=null;if(Object.keys(t).forEach(s=>{t[s].key===e&&(a=s)}),null!==a)return t[a].response},delkrisList=(e,t)=>{let a=null;Object.keys(t).forEach(s=>{t[s].key===e&&(a=s)}),null!==a&&(t.splice(a,1),fs.writeFileSync("./Pengaturan/database/data.json",JSON.stringify(t,null,3)))},clearAllList=e=>{Object.keys(e).forEach(t=>{e.splice(e[t],1),fs.writeFileSync("./Pengaturan/database/data.json",JSON.stringify(e,null,3))}),console.log("Sukses Clear All List")},repPy={key:{remoteJid:"0@s.whatsapp.net",fromMe:!1,id:"kris Bot",participant:"0@s.whatsapp.net"},message:{requestPaymentMessage:{currencyCodeIso4217:"USD",amount1000:999999999,requestFrom:"0@s.whatsapp.net",noteMessage:{extendedTextMessage:{text:"Creator kris"}},expiryTimestamp:999999999,amount:{value:91929291929,offset:1e3,currencyCode:"USD"}}}};function simpan(e,t){return fs.writeFileSync(e,t),e}command&&(kris.sendPresenceUpdate(jd,from),kris.readMessages([m.key]));let lep={key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:""},message:{imageMessage:{mimetype:"image/jpeg",caption:"kris Bot WhatsApp",jpegThumbnail:ppnyaimg}}};async function getFile(e){let t=Buffer.isBuffer(e)?e:isUrl(e)?await (await fetch(e)).buffer():fs.existsSync(e)?fs.readFileSync(e):/^data:.*?\/.*?;base64,/i.test(e)?Buffer.from(e.split(",")[1]):null;return t?{data:t,...await FileType.fromBuffer(t)||{mime:"application/octet-stream",ext:".bin"}}:Error("Result is not a buffer")}async function sendFile(e,t,a={}){let s=await getFile(t),i=s.ext,n;return"mp3"==i?(n="audio",a.mimetype="audio/mpeg",a.ptt=a.ptt||!1):n="jpg"==i||"jpeg"==i||"png"==i?"image":"webp"==i?"sticker":"mp4"==i?"video":"document",kris.sendMessage(e,{[n]:s.data,...a},{...a})}async function replydaftar(e){let t=[{buttonId:".daftar",buttonText:{displayText:"Daftar User"},type:1}];return kris.sendButtonText(m.chat,t,e,"KrisBotz",m)}if(/hehe/g.test(m.body)){let reactionMessage=proto.Message.ReactionMessage.create({key:m.key,text:""});kris.relayMessage(m.chat,{reactionMessage},{messageId:"ppppp"})}if(m.isGroup&&!m.key.fromMe&&!isOwner&&antilink){if(!isBotAdmins)return;budy.match("chat.whatsapp.com")&&(kris.sendMessage(m.chat,{text:`*Antilink Group Terdeteksi*

Kamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`},{quoted:m}),kris.groupParticipantsUpdate(m.chat,[sender],"remove"))}if(!isCmd&&isAlreadykrisList(chath,dblist)){var getkrisdata=getDatakrisList(chath,dblist);!1===getkrisdata.isImage?kris.sendMessage(m.chat,{text:sendkrisList(chath,dblist)},{quoted:m}):(buff=await getBuffer(getkrisdata.image_url),kris.sendImage(m.chat,buff,`${getkrisdata.response}`,m))}if(!isCmd&&m.isGroup&&isAlreadyResponList(m.chat,chath,db_respon_list)){var get_data_respon=getDataResponList(m.chat,chath,db_respon_list);!1===get_data_respon.isImage?kris.sendMessage(m.chat,{text:sendResponList(m.chat,chath,db_respon_list)},{quoted:m}):(buff=await getBuffer(get_data_respon.image_url),kris.sendImage(m.chat,buff,`${get_data_respon.response}`,m))}let nebal=e=>Math.floor(e);switch(global.addUserPanel=(e,t,a,s)=>{var i={email:e,username:t,expired:a};s.push(i),fs.writeFileSync("./Pengaturan/database/user.json",JSON.stringify(s,null,3))},command){case"menu":{let seactiones=[{title:"SILAHKAN DI PILIH",rows:[{title:"ALL MENU",rowId:".allmenu",description:`⎙ ╰─➤ Klik Untuk Menampilkan allmenu Bot`},{title:"OWNER MENU",rowId:".ownermenu",description:`⎙ ╰─➤ Fitur Khusus Owner Beb`},{title:"LIST HARGA PANEL",rowId:".hargapanel",description:`⎙ ╰─➤ Klick Untuk Melihat Harga Panel`},{title:"ORDER PANEL",rowId:".buypanel",description:`⎙ ╰─➤ Klick Untuk Order Panel`},{title:"HARGA ALL SCRIPT",rowId:".allscript",description:`⎙ ╰─➤ Klick Untuk Menampilkan Harga Script`},{title:"JOIN ADMIN PANEL",rowId:".joinpt",description:`⎙ ╰─➤ Join Admin Panel Bang`},{title:"MAIN MENU",rowId:".mainmenu",description:`⎙ ╰─➤ Klick Untuk Menampilkan Fitur Lainnya`},{title:"PEMBAYARAN",rowId:".pembayaran",description:`⎙ ╰─➤ Klick Untuk Bayar`},]}],listSw={text:`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,mentions:[sender],footer:"Silahkan Di Pilih Beb",buttonText:"KrisBotz",sections:seactiones,listType:1};kris.sendMessage(from,listSw,{quoted:m})}break;case"pembayaran":{let seactiones=[{title:"PAYMENT YG TERSEDIA DI KAMI",rows:[{title:"QRIS",rowId:".qris",description:`💸 Klick Untuk Bayar Lewat Qris Alpayment`},{title:"GOPAY",rowId:".gopay",description:`💸 Klick Untuk Bayar Lewat Gopay`},{title:"DANA",rowId:".dana",description:`💸 Klick Untuk Bayar Lewat Dana`},{title:"OVO",rowId:".ovo",description:`💸 Klick Untuk Bayar Ovo`},]}],listSw={text:`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,mentions:[sender],footer:"Silahkan Di Pilih Beb",buttonText:"Payment",sections:seactiones,listType:1};kris.sendMessage(from,listSw,{quoted:m})}break;case"allscript":{let seactiones=[{title:"SCRIPT YG TERSEDIA DI KAMI",rows:[{title:"SCRIPT BUG",rowId:".scbug",description:`🖨 Klick Untuk Buy Script`},{title:"SCRIPT JB",rowId:".scjb",description:`🖨 Klick Untuk Buy Script`},{title:"SCRIPT BOT HOST",rowId:".schost",description:`🖨 Klick Untuk Buy Script`},{title:"SCRIPT PANEL",rowId:".scpanel",description:`🖨 Klick Untuk Buy Script`},]}],listSw={text:`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,mentions:[sender],footer:"Silahkan Di Pilih Beb",buttonText:"ALLSCRIPT",sections:seactiones,listType:1};kris.sendMessage(from,listSw,{quoted:m})}break;case"buypanel":case"belipanel":{let seactiones=[{title:"SILAHKAN DI PILIH",rows:[{title:"RAM1GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 5.000`},{title:"RAM2GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 10.000`},{title:"RAM3GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 15.000`},{title:"RAM4GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 20.000`},{title:"RAM5GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 25.000`},{title:"RAM6GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 30.000`},{title:"RAM7GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 35.000`},{title:"RAM8GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 40.000`},{title:"RAM9GB || CPU 30%",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 50.000`},{title:"RAMULIM || CPU UNLIMI",rowId:".panel g",description:`╰ ►PAKET G1 Rp: 60.000`},]}],listSw={text:`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,mentions:[sender],footer:"Silahkan Di Pilih Beb",buttonText:"HARGA PANEL",sections:seactiones,listType:1};kris.sendMessage(from,listSw,{quoted:m})}break;case"scbug":reply(`SCRIPT BOT BUG ? 
HARGA 15K FULL FITUR BUG NO ENC 100%`);break;case"scjb":reply("Harga Script Jb?  Op 30K Fitur 700+ No Enc 100% No Apikey Ful Scraper");break;case"schost":reply("Mau Buy Sc Nya?  Pm Owner Harga 25K Fitur Banyak");break;case"scpanel":reply("Sc Panel Op 10K Full Fitur Keren Minat Pm");break;case"owner":case"owner":var owner_Nya=global.owner;sendContact(from,owner_Nya,global.ownername,m),reply("Chat aja kak, ga usah malu");break;case"qris":{let pap=`Silahkan Scan Qris Alpayment Di Atas Untuk Melakukan Pembayaran Terimakasih Dan Jangan Lupa Kirim Bukti Ke Owner KrisBoyz
`;kris.sendMessage(from,{image:qrisdonate,caption:pap,footer:`${footer}`})}break;case"allmenu":{let pap=` ┮───┭
╿ ┌──────────────────
╿ │*BOT INFO*
╽ └──────────────────
╽►⎔ Nama Bot : ${botname}
╿►⎔ Owner Nama : ${ownername}
╽►⎔ Owner Nomor : ${owner}
╿►⎔ Version : 1.5
╽►⎔ Runtime : ${runtime(process.uptime())})
╿►⎔ Total Firur : 34+
╽►⎔ Base Ori : KrisBotz
┶──────────
┮───┭
╿ ┌──────────────────
╿ │*OWNER MENU*
╽ └──────────────────
╽⎙─➤ .addusr
╿⎙─➤ .delusr
╽⎙─➤ .addsrv
╿⎙─➤ .delsrv
╽⎙─➤ .listsrv
╿⎙─➤ .listusr
╽⎙─➤ .self
╽⎙─➤ .public
╽⎙─➤ .addcatatan
╽⎙─➤ .delcatatan
╽⎙─➤ .updatecatatan
┶──────────
┮───┭
╿ ┌──────────────────
╿ │*MAIN MENU*
╽ └──────────────────
╽⎙─➤ .sticker
╿⎙─➤ .kick
╽⎙─➤ .hidetag
╿⎙─➤ .antilink
╽⎙─➤ .add
╿⎙─➤ .tagall
╽⎙─➤ .demote
╽⎙─➤ .promote
╽⎙─➤ .listhargapanel
╽⎙─➤ .buypanel
╽⎙─➤ .joinpt
╽⎙─➤ .joinadminpanel
┶──────────
┮───┭
╿ ┌──────────────────
╿ │*PEMBAYARAN*
╽ └──────────────────
╽⎙─➤ .qris
╿⎙─➤ .dana
╽⎙─➤ .gopay
╿⎙─➤ .ovo
┶──────────
┮───┭
╿ ┌──────────────────
╿ │*HARGA SCRIPT*
╽ └──────────────────
╽⎙─➤ .scbug
╿⎙─➤ .scjb
╽⎙─➤ .schost
╿⎙─➤ .scpanel
┶──────────
`;kris.sendMessage(from,{image:krismenu,caption:pap,footer:`${footer}`})}break;case"jadiadmin":case"joinpt":case"hargaadmin":{let pap=` ═══[ *JADI ADMIN PANEL* ]═══⊱
⎙─➤HARGA 40K
*DANA KURANG BISA DP*
╰───➤ *KEUNTUNGAN*
⎙─➤ BISA CREATE PANEL SEPUASNYA
⎙─➤ DI KASIH SC BOT PANEL
⎙─➤ DI AJARIN CARA BUAT 
⎙─➤ DI KASIH VIDEO KEBUTUHAN PANEL
⎙─➤ BISA JUALAN PANEL
⎙─➤ DI JAMIN BALMOND

╭┈─────────────⩵꙰ཱི
⎙ : *Order* : wa.me/62882007324217
╰───➤
`;kris.sendMessage(from,{image:krismenu,caption:pap,footer:`${footer}`})}break;case"gopay":{let pap=` *PEMBAYARAN GOPAY*

╭─❏ *『 OWNER MENU 』*
║ ➪ NO GOPAY : 62882007324217
║ ➪ A/N KRISBOTZ
┗⬣

Silahkan Transfer Lewat Nomor Tercantum Di Atas Atau Scan Qris Gopay Di Atas Terimakasih
`;kris.sendMessage(from,{image:qrisgopay,caption:pap,footer:`${footer}`})}break;case"dana":{let pap=` *PEMBAYARAN DANA*

╭─❏ *『 OWNER MENU 』*
║ ➪ NO GOPAY : 62882007324217
║ ➪ A/N KRISBOTZ
┗⬣

Silahkan Transfer Lewat Nomor Tercantum Di Atas Atau Scan Qris Gopay Di Atas Terimakasih
`;kris.sendMessage(from,{image:qrisdana,caption:pap,footer:`${footer}`})}break;case"ovo":{let pap=` *PEMBAYARAN OVO*

╭─❏ *『 OWNER MENU 』*
║ ➪ NO GOPAY : 6285786211623
║ ➪ A/N KRIS
┗⬣

Silahkan Transfer Lewat Nomor Tercantum Di Atas Atau Scan Qris Gopay Di Atas Terimakasih
`;kris.sendMessage(from,{image:qrisdonate,caption:pap,footer:`${footer}`})}break;case"ownermenu":{let pap=`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu} 
				

╭─❏ *『 OWNER MENU 』*
║ ➪ addusr
║ ➪ delusr
║ ➪ addsrv
║ ➪ delsrv
║ ➪ listusr
║ ➪ listsrv
║ ➪ addcatatan
║ ➪ delcatatan
║ ➪ listcatatan
┗⬣
`;kris.sendMessage(from,{image:krismenu,caption:pap,footer:`${footer}`})}break;case"mainmenu":{let dahlah=`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu} 
				

╭─❏ *『 MAIN MENU 』*
║ ➪ sticker
║ ➪ kick
║ ➪ hidetag
║ ➪ antilink
║ ➪ add
║ ➪ tagall
║ ➪ demote
║ ➪ promote
┗⬣
`;kris.sendMessage(from,{image:krismenu,caption:dahlah,footer:`${footer}`})}break;case"kick":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);await kris.groupParticipantsUpdate(m.chat,[m.mentionedJid[0]?m.mentionedJid[0]:m.quoted?m.quoted.sender:text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"remove").then(e=>reply(jsonformat(e))).catch(e=>reply(jsonformat(e)));break;case"promote":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);await kris.groupParticipantsUpdate(m.chat,[m.mentionedJid[0]?m.mentionedJid[0]:m.quoted?m.quoted.sender:text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"promote").then(e=>reply(jsonformat(e))).catch(e=>reply(jsonformat(e)));break;case"demote":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);await kris.groupParticipantsUpdate(m.chat,[m.mentionedJid[0]?m.mentionedJid[0]:m.quoted?m.quoted.sender:text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"demote").then(e=>reply(jsonformat(e))).catch(e=>reply(jsonformat(e)));break;case"hidetag":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);if(!q)return reply("Teks?");kris.sendMessage(m.chat,{text:q||"",mentions:participants.map(e=>e.id)},{quoted:m});break;case"tagall":{if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);if(!q)return reply("Teks?");let teks=`${q||""}
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
══✪〘 *👥 Tag All* 〙✪══
`;for(let mem of participants)teks+=`➲ @${mem.id.split("@")[0]}
`;kris.sendMessage(m.chat,{text:teks,mentions:participants.map(e=>e.id)},{quoted:m})}break;case"add":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);await kris.groupParticipantsUpdate(m.chat,[m.quoted?m.quoted.sender:text.replace(/[^0-9]/g,"")+"@s.whatsapp.net"],"add").then(e=>reply(jsonformat(e))).catch(e=>reply(jsonformat(e)));break;case"listcatatan":if(!m.isGroup)return reply(mess.group);if(0===db_respon_list.length)return reply("Belum ada list message di database");if(!isAlreadyResponListGroup(from,db_respon_list))return reply("Belum ada list message yang terdaftar di group ini");var arr_rows=[];for(let x of db_respon_list)x.id===from&&arr_rows.push({title:x.key,rowId:x.key});let listMessageNya={text:`Hai Kak ${pushname}

Berikut Adalah List Item
Silahkan Pilih Salah Satu!!!
${tanggal(new Date)}
🕰 Jam : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")} WIB`,footer:"List By kris",buttonText:"Catatan",sections:[{title:groupName,rows:arr_rows}],listType:1},sendMsge=await kris.sendMessage(from,listMessageNya);break;case"addcatatan":case"addcatatanhutang":if(!isOwner||!isOwner)return reply(mess.owner);if(!m.isGroup)return reply(mess.group);var args1=text.split("@")[0],args2=text.split("@")[1];if(!q.includes("@"))return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*

_Contoh_

${prefix+command.slice(0)} namalist@List`);if(isAlreadyResponList(from,args1,db_respon_list))return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`);/image/.test(mime)?(mem=await uptotelegra(media=await kris.downloadAndSaveMediaMessage(quoted)),addResponList(from,args1,args2,!0,`${mem}`,db_respon_list),reply(`Sukses set list message dengan key : *${args1}*`),fs.existsSync(media)&&fs.unlinkSync(media)):(addResponList(from,args1,args2,!1,"-",db_respon_list),reply(`Sukses Add List Dengan Kunci : *${args1}*`));break;case"delcatatan":if(!isOwner)return reply(mess.owner);if(!m.isGroup)return reply(mess.group);if(0===db_respon_list.length)return reply("Belum ada list message di database");if(!q)return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*

_Contoh_

${command.slice(1)} namalist`);if(!isAlreadyResponList(from,q,db_respon_list))return reply(`List Item dengan Nama *${q}* tidak ada di database!`);delResponList(from,q,db_respon_list),reply(`Sukses delete list message dengan key *${q}*`);break;case"updatecatatan":if(!isOwner)return reply(mess.owner);if(!m.isGroup)return reply(mess.group);var args1=q.split("@")[0],args2=q.split("@")[1];if(!q.includes("@"))return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*

_Contoh_

${command.slice(1)} namalist@List`);if(!isAlreadyResponListGroup(from,db_respon_list))return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`);/image/.test(mime)?(mem=await uptotelegra(media=await kris.downloadAndSaveMediaMessage(quoted)),updateResponList(from,args1,args2,!0,`${mem}`,db_respon_list),reply(`Sukses update list message dengan key : *${args1}*`),fs.existsSync(media)&&fs.unlinkSync(media)):(updateResponList(from,args1,args2,!1,"-",db_respon_list),reply(`Sukses update respon list dengan key *${args1}*`));break;case"antilink":if(!m.isGroup)return reply(mess.group);if(!isAdmins&&!isOwner)return reply(mess.admin);if(!isBotAdmins)return reply(mess.botAdmin);if("on"==args[0]){if(antilink)return reply("*Sudah Aktif!*");antilink=!0,reply("*Berhasil Mengaktifkan Antilink*")}else if("off"==args[0]){if(!antilink)return reply("*Belum Aktif!*");antilink=!1,reply("*Berhasil Mematikan Antilink*")}else await kris.sendButtonText(m.chat,[{buttonId:".antilink on",buttonText:{displayText:"On"},type:1},{buttonId:".antilink off",buttonText:{displayText:"Off"},type:1}],"Mode Antilink","Pilih On Atau Off",m);break;case"sticker":case"s":if(!quoted)return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}
Durasi Video 1-9 Detik`);if(/image/.test(mime))await fs.unlinkSync(await kris.sendImageAsSticker(m.chat,await quoted.download(),m,{packname:global.packname,author:global.footer}));else if(/video/.test(mime)){if((quoted.msg||quoted).seconds>11)return reply("Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik");await fs.unlinkSync(await kris.sendVideoAsSticker(m.chat,await quoted.download(),m,{packname:global.packname,author:global.footer}))}else reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}
Durasi Video 1-9 Detik`);break;case"hargapanelsimple":case"hargapanel":case"listhargapanel":{let kond=`Hai Kak @${sender.split("@")[0]} ${ucapanWaktu} 
				
.hidetag ╭┈─────────────⩵꙰ཱི
⎙ : *Nama* :  KrisBotz
⎙ : *Order* : wa.me/62882007324217
╰───➤

═══[「 *PANEL RUN BOT*」]═══⊱
⎙ : RAM 1GB | CPU 35%
╰───➤ HARGA : 5.000
⎙ : RAM 2GB | CPU 50%
╰───➤ HARGA : 10.000
⎙ : RAM 3GB | CPU 85%
╰───➤ HARGA : 15.000
⎙ : RAM 4GB | CPU 100%
╰───➤ HARGA : 20.000
⎙ : RAM 5GB | CPU 130%
╰───➤ HARGA : 25.000
⎙ : RAM 6GB | CPU 160%
╰───➤ HARGA : 30.000
⎙ : RAM 7GB | CPU 200%
╰───➤ HARGA : 35.000
⎙ : RAM UNLI | CPU UNLI
╰───➤ HARGA : 40.000
━━━━━━━━━━━━━━━━⬣

═══[「 *PERPANJANG* 」]═══⊱
• *RAM/CPU 1-3* :  4K
• *RAM/CPU 4-7* : 8K
• *RAM/CPU*  : 12K
━━━━━━━━━━━━━━━━⬣
═══[「 *KEUNTUNGAN* 」]═══⊱
⎙─➤ BOT ON 24JAM NONSTOP
⎙─➤ NO INTERNET
⎙─➤ HP MATI BOT TETAP ON
⎙─➤ PANEL GAK DELAY
⎙─➤ FAST RESPON
⎙─➤ BISA BUAT RUN BOT BUG
⎙─➤ BISA BUAT RUN BOT WEBP
⎙─➤ HARGA TERJANGKAU
⎙─➤ FULL PENGAJARAN BERPUA VIDEO
⎙─➤ DI KASIH VIDEO CARA RUN NYA
`;kris.sendMessage(from,{image:krismenu,caption:kond,footer:`${footer}`})}break;case"panel":"g"==args[0]&&(reply(`𝑻𝒓𝒊𝒎𝒂𝒌𝒂𝒔𝒊𝒉 𝑲𝒂𝒌 𝑶𝒓𝒅𝒆𝒓𝒂𝒏 𝐾𝑎𝑘𝑎𝑘 𝑺𝒆𝒅𝒂𝒏𝒈 𝑫𝒂𝒍𝒂𝒎 𝑷𝒓𝒐𝒔𝒆𝒔 𝑪𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒔𝒊 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓 𝑻𝒖𝒏𝒈𝒈𝒖 𝑺𝒂𝒎𝒑𝒂𝒊 𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒈𝒉𝒖𝒃𝒖𝒏𝒈𝒊 𝐾𝑎𝑘𝑎 𝐾𝑒𝑚𝑏𝑎𝑙𝑖 𝑮𝒖𝒔𝒕𝒊𝑷𝒂𝒏𝒆𝒏𝒈𝒂𝒉,`),kris.sendMessage("62882007324217@s.whatsapp.net",{text:`📮 𝐎𝐑𝐃𝐄𝐑𝐀𝐍
✎ 𝗡𝗮𝗺𝗮𝗨𝘀𝗲𝗿 : ${pushname}
✆ 𝗡𝗼𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/${sender.split("@")[0]}
✉  𝗜𝘁𝗲𝗺 : BUY PANEL
`,mentions:[sender]},{quoted:m}));break;case"listusr":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let res=await (await fetch(domain+"/api/application/users?page="+(args[0]?args[0]:"1"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}})).json(),users=res.data,sections=[];for(let user of users){let u=user.attributes;await sections.push({title:"-- KRIS PANEL --",rows:[{title:`${u.id}. ${u.username}`,rowId:`${prefix}detusr `+u.id,description:u.first_name+" "+u.last_name},]}),50===sections.length&&sections.push({title:"-- KRIS PANEL --",rows:[{title:`⏩ NEXT`,rowId:`${prefix}listusr 2`,description:"Page 2"},{title:`⏩ NEXT`,rowId:`${prefix}listusr 3`,description:"Page 3"},{title:`⏩ NEXT`,rowId:`${prefix}listusr 4`,description:"Page 4"},{title:`⏩ NEXT`,rowId:`${prefix}listusr 5`,description:"Page 5"},]})}await kris.sendMessage(m.chat,{text:"Berikut list user *KRIS PANEL*",footer:`Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,title:"*KRIS PANEL*",buttonText:`${res.meta.pagination.count} Users`,sections},{quoted:m})}break;case"addusr":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let t=text.split(",");if(t.length<3)return reply(`*Format salah!*

Penggunaan:
${prefix+command} email,username,name,number/tag`);let email=t[0],username=t[1],name=t[2],u=m.quoted?m.quoted.sender:t[3]?t[3].replace(/[^0-9]/g,"")+"@s.whatsapp.net":m.mentionedJid[0];if(!u)return reply(`*Format salah!*

Penggunaan:
${prefix+command} email,username,name,number/tag`);let password=((await kris.onWhatsApp(u.split`@`[0]))[0]||{}).exists?crypto.randomBytes(5).toString("hex"):t[3],data=await (await fetch(domain+"/api/application/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey},body:JSON.stringify({email:email,username:username,first_name:name,last_name:"Memb",language:"en",password:password.toString()})})).json();if(data.errors)return reply(JSON.stringify(data.errors[0],null,2));let user=data.attributes;await kris.sendMessage(m.chat,{text:`
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
║⎙─➤ *ID* : ${user.id}
║⎙─➤ *USERNAME* : ${user.username}
║⎙─➤ *EMAIL* : ${user.email}
║⎙─➤ *NAME* : ${user.first_name} ${user.last_name}
║⎙─➤ *CREATED AT* :  ${user.created_at}
║⎙─➤ *LOGIN* : ${domain}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`,mentions:[u]}),kris.sendMessage(u,{text:`*BERIKUT DETAIL AKUN PANEL ANDA*

╭─❏ *『 USER INFO 』*
║⎙─➤ *📧EMAIL* : ${email}
║⎙─➤ *👤USERNAME* : ${username}
║⎙─➤ *🔐PASSWORD* : ${password.toString()}
║⎙─➤ *🌐LOGIN* : ${domain}
┗⬣`})}break;case"delusr":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let usr=args[0];if(!usr)return reply("ID nya mana?");let f=await fetch(domain+"/api/application/users/"+usr,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}});if((f.ok?{errors:null}:await f.json()).errors)return reply("*USER NOT FOUND*");reply("*SUCCESSFULLY DELETE THE USER*")}break;case"detusr":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let res=await (await fetch(domain+"/api/application/users/"+args[0],{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}})).json();if(res.errors)return reply("*USER NOT FOUND*");let u=res.attributes;reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${u.created_at}\`\`\``)}break;case"listsrv":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let res=await (await fetch(domain+"/api/application/servers?page="+(args[0]?args[0]:"1"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}})).json(),servers=res.data,sections=[];for(let server of servers){let s=server.attributes,data=await (await fetch(domain+"/api/client/servers/"+s.uuid.split`-`[0]+"/resources",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+capikey}})).json();await sections.push({title:"-- KRIS PANEL --",rows:[{title:`${s.id}. ${s.name}`,rowId:`${prefix}detsrv `+s.id,description:`Status: ${data.attributes?data.attributes.current_state:s.status}`},]}),sections.length>=50&&res.meta.pagination.links.next&&sections.push({title:"-- KRIS PANEL --",rows:[{title:`⏩ NEXT`,rowId:`${prefix}listsrv 2`,description:"Page 2"},{title:`⏩ NEXT`,rowId:`${prefix}listsrv 3`,description:"Page 3"},{title:`⏩ NEXT`,rowId:`${prefix}listsrv 4`,description:"Page 4"},{title:`⏩ NEXT`,rowId:`${prefix}listsrv 5`,description:"Page 5"},]})}await kris.sendMessage(m.chat,{text:"Berikut list server *KRIS PANEL*",footer:`Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,title:"*KRIS PANEL*",buttonText:`${res.meta.pagination.count} Servers`,sections},{quoted:m})}break;case"addsrv":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let s=text.split(",");if(s.length<7)return reply(`*Format salah!*

Penggunaan:
${prefix+command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`);let name=s[0],desc=s[1]||"",usr_id=s[2],egg=s[3],loc=s[4],memo_disk=s[5].split`/`,cpu,res=await (await fetch(domain+"/api/application/servers",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey},body:JSON.stringify({name:name,description:desc,user:usr_id,egg:parseInt(egg),docker_image:"ghcr.io/parkervcp/yolks:nodejs_18",startup:(await (await fetch(domain+"/api/application/nests/5/eggs/"+egg,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}})).json()).attributes.startup,environment:{INST:"npm install",USER_UPLOAD:"0",AUTO_UPDATE:"0",CMD_RUN:"npm start"},limits:{memory:memo_disk[0],swap:0,disk:memo_disk[1],io:500,cpu:s[6]},feature_limits:{databases:5,backups:5,allocations:5},deploy:{locations:[parseInt(loc)],dedicated_ip:!1,port_range:[]}})})).json();if(res.errors)return reply(JSON.stringify(res.errors[0],null,2));let server=res.attributes;reply(`*SUCCESSFULLY ADD SERVER*

╭─❏ *『 USER INFO 』*
║⎙─➤ *ID* : ${server.uuid}
║⎙─➤ *NAME* : ${server.name}
║⎙─➤ *DESCRIPTION* : ${server.description}
║⎙─➤ *MEMORY* : ${0===server.limits.memory?"Unlimited":server.limits.memory} MB
║⎙─➤ *DISK* : ${0===server.limits.disk?"Unlimited":server.limits.disk} MB
║⎙─➤ *CPU* : ${server.limits.cpu}%
║⎙─➤ *CREATED AT* : ${server.created_at}
┗⬣`)}break;case"delsrv":{if(!isOwner)return reply("Maaf Command Tersebut Khusus Developer Bot WhatsApp");let srv=args[0];if(!srv)return reply("ID nya mana?");let f=await fetch(domain+"/api/application/servers/"+srv,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}});if((f.ok?{errors:null}:await f.json()).errors)return reply("*SERVER NOT FOUND*");reply("*SUCCESSFULLY DELETE THE SERVER*")}break;case"detsrv":{let res=await (await fetch(domain+"/api/application/servers/"+args[0],{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+apikey}})).json();if(res.errors)return reply("*SERVER NOT FOUND*");let s=res.attributes,t=(await (await fetch(domain+"/api/client/servers/"+s.uuid.split`-`[0]+"/resources",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+capikey}})).json()).attributes;reply(`*${s.name.toUpperCase()} SERVER DETAILS*

STATUS: ${t.current_state}


ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await format(t.resources.memory_bytes).toString()} / ${0===s.limits.memory?"Unlimited":s.limits.memory+"MB"}
DISK: ${await format(t.resources.disk_bytes).toString()} / ${0===s.limits.disk?"Unlimited":s.limits.disk+"MB"}
CPU: ${t.resources.cpu_absolute}% / ${0===s.limits.cpu?"Unlimited":s.limits.cpu+"%"}
CREATED AT: ${s.created_at}`)}break;case"setppbot":if(!isOwner)return;if(!quoted||!/image/.test(mime)||/webp/.test(mime))return reply(`Kirim/Reply Image Dengan Caption ${prefix+command}`);var medis=await kris.downloadAndSaveMediaMessage(quoted,"ppbot.jpeg");if("/full"==args[0]){var{img}=await generateProfilePicture(medis);await kris.query({tag:"iq",attrs:{to:botNumber,type:"set",xmlns:"w:profile:picture"},content:[{tag:"picture",attrs:{type:"image"},content:img}]}),fs.unlinkSync(medis),reply("Sukses")}else{var memeg=await kris.updateProfilePicture(botNumber,{url:medis});fs.unlinkSync(medis),reply("Sukses")}break;case"enc":if(!q)return reply("Teks Nya Mana");for(var x in get_result=(get_result=await fetchJson(`https://apikrisbotz.krishost.repl.co/api/tools/dbase64?text=${q}&apikey=KrisBotz`)).result,ini_txt="List Surah:\n",get_result)ini_txt+=`${x}. ${get_result[x]}
`;reply(ini_txt);break;case"encypt":case"geayubi":case"euni":if(!q)return reply("Teks Nya Mana");reply(mess.wait);var bgh=await getBuffer(`https://apikrisbotz.krishost.repl.co/api/tools/dbase64?text=${q}&apikey=KrisBotz`);kris.sendMessage(from,{text:bgh},{quoted:m});break;default:if(budy.startsWith("<")){if(!isOwner)return;try{return reply(JSON.stringify(eval(`${args.join(" ")}`),null,"	"))}catch(e){reply(e)}}if(budy.startsWith("vv")){if(!isOwner)return;try{let evaled=await eval(budy.slice(2));"string"!=typeof evaled&&(evaled=require("util").inspect(evaled)),await reply(evaled)}catch(err){reply(String(err))}}if(budy.startsWith("uu")){if(!isOwner)return;qur=budy.slice(2),exec(qur,(e,t)=>{if(e)return reply(`${e}`);t&&reply(t)})}if(isCmd&&void 0!=budy.toLowerCase()){if(m.chat.endsWith("broadcast")||m.isBaileys)return;let msgs=global.db.database;if(!(budy.toLowerCase() in msgs))return;kris.copyNForward(m.chat,msgs[budy.toLowerCase()],!0)}}}catch(err){console.log(util.format(err));let e=String(err);kris.sendMessage("62882007324217@s.whatsapp.net",{text:"assalamualaikum Owner Ada Fitur Yang Eror Nih "+util.format(e),contextInfo:{forwardingScore:5,isForwarded:!0}})}};