import { ja } from "./ja";
import { en } from "./en";

export type Locale = "ja" | "en";
export type Translations = typeof ja;

const translations: Record<Locale, Translations> = { ja, en };

export function t(locale: Locale): Translations {
  return translations[locale];
}
