// i18n.ts (Next-Intl v3)
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Nạp messages từ thư mục /messages
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
