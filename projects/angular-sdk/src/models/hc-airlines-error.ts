import { Error } from '../apis/hopper-cloud-airline/v1';
import { ErrorCode } from '../enums/error-code.enum';

export class HcAirlinesError implements Error {

  status?: string;
  message: string;
  code?: string;
  
  private static readonly DEFAULT_HC_AIRLINES_ERROR_CODE = "HC_AIRLINES_ERROR";

  constructor(message: string, code?: string, status?: string) {
    this.status = status;
    this.message = message;
    this.code = code;
  }
  
  public static buildDefault(): HcAirlinesError {
    return new HcAirlinesError("An error occured", ErrorCode.DEFAULT);
  }

  public extractCode(): string {
    return this.code ?? HcAirlinesError.DEFAULT_HC_AIRLINES_ERROR_CODE;
  }

  public toString(): string {
    return this.extractCode() + " : " + this.message;
  }
}