import Ajv from "ajv";
import { Locales } from './index';
import { I18N_SCHEMA } from "./i18n-schema";

const ajv = new Ajv();
const validate = ajv.compile<typeof I18N_SCHEMA>(I18N_SCHEMA);

Locales.forEach((json: Object, lang: string) => {
  if (validate(json)) {
    console.log('########################################\n');
    console.log(lang.toUpperCase() + ' json file is valid.\n');
  } else {
    console.log('########################################\n');
    console.error(lang.toUpperCase() + ' json file is invalid :\n');

    if (validate.errors && validate.errors.length) {
      validate.errors.forEach(error => {
        console.error('- ' + error.message);
      });
      console.error('\n');
    }

    throw new Error('One of the json file is invalid');
  }
});