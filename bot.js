const { Telegraf } = require('telegraf');

// Токен telegram бота
const TELEGRAM_BOT_TOKEN = '7851288541:AAHO9PsqhudonjZWekH7gZq-nrgOgLy2Jmo';

// URL для GitHub Pages
const WEBAPP_URL = 'https://artem123213432.github.io/miniapp';

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// Команда /start
bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать в FreelanceWallet! 🚀\n\n' +
    'Это ваш личный кошелек для работы с фрилансерами.\n' +
    'Используйте меню ниже для навигации:',
    {
      reply_markup: {
        keyboard: [
          [{ text: '💰 Кошелек', web_app: { url: WEBAPP_URL } }],
          [{ text: '🔄 Биржа', web_app: { url: `${WEBAPP_URL}/exchange` } }],
          [{ text: '👤 Профиль', web_app: { url: `${WEBAPP_URL}/profile` } }]
        ],
        resize_keyboard: true
      }
    }
  );
});

// Обработка текстовых сообщений
bot.on('text', (ctx) => {
  if (ctx.message.text === '💰 Кошелек') {
    ctx.reply('Открываю кошелек...', {
      web_app: { url: WEBAPP_URL }
    });
  } else if (ctx.message.text === '🔄 Биржа') {
    ctx.reply('Открываю биржу...', {
      web_app: { url: `${WEBAPP_URL}/exchange` }
    });
  } else if (ctx.message.text === '👤 Профиль') {
    ctx.reply('Открываю профиль...', {
      web_app: { url: `${WEBAPP_URL}/profile` }
    });
  }
});

// Запуск бота
bot.launch()
  .then(() => console.log('Бот успешно запущен'))
  .catch((err) => console.error('Ошибка при запуске бота:', err));

// Включаем graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM')); 