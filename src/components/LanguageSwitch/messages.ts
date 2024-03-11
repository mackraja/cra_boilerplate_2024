import { _t } from "utils/messages";

import { translations } from "locales/translations";

export const messages = {
  selectLanguage: () =>
    _t(
      translations.i18nFeature.selectLanguage,
      "Select Language", // default value
    ),
};
