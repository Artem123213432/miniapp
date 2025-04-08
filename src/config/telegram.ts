export const TELEGRAM_BOT_TOKEN = '7851288541:AAHO9PsqhudonjZWekH7gZq-nrgOgLy2Jmo';

export const initTelegramWebApp = () => {
  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
    
    // Настройка темы
    const colorScheme = window.Telegram.WebApp.colorScheme;
    document.documentElement.classList.toggle('dark', colorScheme === 'dark');
    
    return window.Telegram.WebApp;
  }
  return null;
}; 