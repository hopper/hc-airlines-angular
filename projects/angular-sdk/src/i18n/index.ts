// http://www.loc.gov/standards/iso639-2/php/code_list.php

import * as English from './locales/en/common.json';
import * as French from './locales/fr/common.json';
import * as Chinese from './locales/zh/common.json';

// Availables Languages
export const Locales: Map<string, Object> = new Map<string, Object>([
    ['en', English],
    ['fr', French],
    ['zh', Chinese]
]);