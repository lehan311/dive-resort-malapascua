import { defineConfig } from 'next-intl';

export default defineConfig({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  messagesDir: './messages',
});
