let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Bot WhatsApp V.01

Lokasi Pembuatan : Jambi,Singkut
Creator Bot : ArdiYansah

Scrip Ini Perpaduan Antara Scrip :
1.Nurutomo
2.ArdiGans YT
3.Drawl Nag
Nama Bot : BotPatrick Star
Menampilkan menu ketik :
#menu / #help
Nama Scrip :
Patrickstar-Bot

Github Saya :
https://github.com/ArdiGansYT
    
       *[ArdiGans YT]*
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

