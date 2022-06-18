const { bot } = require('../core/bot');

bot.start((ctx) => ctx.reply(`Hello ${ctx.message.chat.first_name}`).then())