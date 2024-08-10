export const i18n = {
  defaultLocale: "pt-BR",
  locales: ["en", "pt-BR"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 新增的映射对象
export const localeMap = {
  en: "English",
  "pt-BR": "Português"
} as const;
