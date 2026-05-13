import { en } from "./en";
import { ptBR } from "./pt-BR";

const TABLE: Record<string, Record<string, string>> = {
  en,
  "en-US": en,
  "en-GB": en,
  "pt-BR": ptBR,
  "pt": ptBR,
};

export function localize(key: string, lang?: string): string {
  const table = (lang && TABLE[lang]) || en;
  return table[key] ?? key;
}
