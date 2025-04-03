import { LanguageKey } from '@/contexts/LanguageContext';
import { AllTranslations } from './types';
import { enTranslations } from './en';
import { ptBrTranslations } from './pt-br';

export const translations: Record<LanguageKey, AllTranslations> = {
  'en': enTranslations,
  'pt-br': ptBrTranslations
};

// Re-export types for use elsewhere
export * from './types';
