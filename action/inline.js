const { Markup } = require('telegraf');
const { bot } = require('../core/bot');

// bot.command('test', ctx => {
//   return ctx.reply('Custum keyboard', Markup.keyboard([
//     ['A', 'B'],
//     ['C', 'D']
//   ]))
// })

// bot.command('inline', ctx => {
//   return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', {
//     parse_mode: 'HTML',
//     ...Markup.inlineKeyboard([
//       Markup.button.callback('Coke', 'Coke'),
//       Markup.button.callback('Pepsi', 'Pepsi')
//     ])
//   })
// })

bot.command('inline', ctx => {
  const keyboard = Markup.inlineKeyboard([
    Markup.button.url('Go site', 'google.com')
  ])

  ctx.telegram.sendMessage(
    ctx.from.id,
    'Testing url btns',
    {
      parse_mode: 'HTML',
      reply_markup: keyboard
    }
  ).then()
})

// bot.command('caption', (ctx) => {
//   return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
//     {
//       caption: 'Caption',
//       parse_mode: 'Markdown',
//       ...Markup.inlineKeyboard([
//         Markup.button.callback('Plain', 'plain'),
//         Markup.button.callback('Italic', 'italic')
//       ])
//     }
//   )
// })

// bot.action('plain', async (ctx) => {
//   await ctx.answerCbQuery()
//   await ctx.editMessageCaption('Caption', Markup.inlineKeyboard([
//     Markup.button.callback('Plain', 'plain'),
//     Markup.button.callback('Italic', 'italic')
//   ]))
// })


// bot.action('italic', async (ctx) => {
//   await ctx.answerCbQuery()
//   await ctx.editMessageCaption('_Caption_', {
//     parse_mode: 'Markdown',
//     ...Markup.inlineKeyboard([
//       Markup.button.callback('* Plain *', 'plain'),
//       Markup.button.callback('* Italic *', 'italic')
//     ])
//   })
// })

// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))