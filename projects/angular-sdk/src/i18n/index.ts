// http://www.loc.gov/standards/iso639-2/php/code_list.php

import * as English from './locales/en.json';
import * as French from './locales/fr.json';
import * as Chinese from './locales/zh.json';

// Availables Languages
export const Locales: Map<string, Object> = new Map<string, Object>([
    ['en', English],
    ['fr', French],
    ['zh', Chinese]
]);