import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { CustomerService } from '../apis/hopper-cloud-airline/v1';
import { HopperProxyService } from './hopper-proxy.service';

@Injectable()
export class HopperErrorHandlerService extends HopperProxyService {

    constructor(
      protected _httpClient: HttpClient,
      protected _customerService: CustomerService
    ) {
      super(_httpClient, _customerService)
    }

    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------

    handleError(error: any): void {
        // FIXME : to implement later
        // console.error(error);
        // this._customerService.sendError
        super.handleError(error);
    }
}