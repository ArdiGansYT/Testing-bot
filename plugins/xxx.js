let handler = async
  if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
			   if (isLimit(sender)) return reply(limits.limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana Ngab?')
                    teks = body.slice(5)
                    anu = await fetchJson(`https://api.vhtear.com/xxxsearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `• Title: ${bokep.data.title}\n• Durasi: ${bokep.data.durasi}\n• Link: ${bokep.data.url}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender)
})
handler.help = ['xxx']
handler.tags = ['xnxx']
handler.command = /^xnxx$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler