import { HcAirlinesError } from '../models/hc-airlines-error';
import { Error} from '../apis/hopper-cloud-airline/v1';
import { ArrayUtils } from './array-utils';

export class ApiHttpUtils {
    public static readonly DEFAULT_HC_AIRLINES_ERROR_CODE = "HC_AIRLINES_ERROR";
    public static readonly HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE = 422;
  
    public static manageErrorResponse(apiErrorResponse: any): HcAirlinesError {
      if (apiErrorResponse.status == ApiHttpUtils.HTTP_ERROR_UNPROCESSABLE_ENTITY_CODE) {
        const apiErrors = apiErrorResponse.error.errors;
        if (ArrayUtils.isNotEmpty(apiErrors)) {
          const mainApiError = apiErrors[0] as Error;
          return new HcAirlinesError(mainApiError.message, mainApiError.code);
        } else {
          console.log(apiErrorResponse)
        }
      } else {
        console.log(apiErrorResponse)
      }
      return HcAirlinesError.buildDefault();
    }
  }