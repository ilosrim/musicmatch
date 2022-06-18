const { bot } = require('../core/bot');

bot.help((ctx)=>{
  let text = '<b>Botimizdagi mavjud komandalar:</b>\n' +
    '/start - <code>Ishga tushirish</code>\n' +
    "Autor - <a href='https://ilosrim.uz'>ilosrim</a>"
  ctx.replyWithHTML(text).then()
})