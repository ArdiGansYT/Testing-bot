let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔════════════════════
║       *INFO BOT*             
╠════════════════════
║╭──❉ *INFO* ❉──
║│➸ *SUBSCRIBE ${yt}*
║│➸ *FOLLOW ${Instagram}*
║│➸ *Nomor Patrick 👇🐗*
║│➸  0852-8299-6146
║│➸ *BOT BY : ARDIGANS YT*
║│➸ *ON? : Tergantung Wifi Tetangga🤣*
║╰───────────
╠════════════════════

╔════════════════════
║       *RULES BOT*             
╠════════════════════
║╭──❉ *RULES* ❉──
║│➸ Call+Chat P🚫
║│➸ No Toxix
║│➸ Ucapkansalam
║│➸ Porno🔞🚫
║│➸ Bot No Respon? Lagi Coly
║│➸ Tidak respon? Sedang Perbaikan..
║╰───────────
╠════════════════════
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

