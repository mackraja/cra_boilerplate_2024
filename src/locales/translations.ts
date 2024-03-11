import { ConvertedToObjectType, TranslationJsonType } from "./types";

/**
 * This file is seperate from the './i18n.ts' simply to make the Hot Module Replacement work seamlessly.
 * Your components can import this file in 'messages.ts' files which would ruin the HMR if this isn't a separate module
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const translations: ConvertedToObjectType<TranslationJsonType> = {} as any;
