import { Error } from '../apis/hopper-cloud-airline/v1';
import { ApiHttpUtils } from '../public-api';

export class HcAirlinesError implements Error {
  status?: string;
  message: string;
  code?: string;
  
  constructor(message: string, code?: string, status?: string) {
    this.status = status;
    this.message = message;
    this.code = code;
  }
  
  static buildDefault() {
    return new HcAirlinesError("An error occured");
  }

  public extractCode(): string {
    return this.code ?? ApiHttpUtils.DEFAULT_HC_AIRLINES_ERROR_CODE;
  }

  public toString(): string {
    return this.extractCode() + " : " + this.message;
  }
}