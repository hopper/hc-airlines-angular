import { camelCase, snakeCase } from 'lodash';

export class ApiTranslatorUtils {

    public static modelToSnakeCase(apiModel: any): any {
        if (!apiModel)	{ return; }

        const modelData: any = {};

        for (const key of Object.keys(apiModel)) {
            if (apiModel[key] === null && apiModel[key] === undefined) {
                return;
            }

            if (Array.isArray(apiModel[key])) {
                const array = [];

                for (const item of apiModel[key]) {
                    switch (typeof item) {
                    case 'string':
                        array.push(item);
                        break;
                    case 'number':
                        array.push(item);
                        break;
                    default:
                        array.push(this.modelToSnakeCase(item));
                    }
                }
                
                modelData[snakeCase(key)] = array;
            } else {
                if (typeof(apiModel[key]) === 'object' && !(apiModel[key] instanceof Date)) {
                    modelData[snakeCase(key)] = this.modelToSnakeCase(apiModel[key]);
                } else {
                    modelData[snakeCase(key)] = apiModel[key];
                }
            }
        }

        return modelData;
    }
	
    public static modelToCamelCase(apiModel: any): any {
        if (!apiModel)	{ return; }

        const modelData: any = {};

        for (const key of Object.keys(apiModel)) {
            if (apiModel[key] === null && apiModel[key] === undefined) {
                return;
            }

            if (Array.isArray(apiModel[key])) {
                const array = [];

                for (const item of apiModel[key]) {
                    switch (typeof item) {
                    case 'string':
                        array.push(item);
                        break;
                    case 'number':
                        array.push(item);
                        break;
                    default:
                        array.push(this.modelToCamelCase(item));
                    }
                }
                
                modelData[camelCase(key)] = array;
            } else {
                modelData[camelCase(key)] = (typeof(apiModel[key]) === 'object')
                ? this.modelToCamelCase(apiModel[key])
                : apiModel[key];
            }
        }

        return modelData;
    }
  }