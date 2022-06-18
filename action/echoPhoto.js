const { bot } = require('../core/bot');

bot.on('photo', (ctx)=>{
  ctx.reply('Qabul qilindi va qaytarildi: ')
  
  let user = ctx.from.id;
  let photo = ctx.message.photo[0].file_id;

  ctx.telegram.sendPhoto(user, photo).then();
})