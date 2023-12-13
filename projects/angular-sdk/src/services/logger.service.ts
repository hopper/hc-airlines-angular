import { Injectable } from '@angular/core';
import { HandlerType, datadogLogs as datadog } from '@datadog/browser-logs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  private _context: any = {};
  private _logger;
  private _initConfig = {
    clientToken: "pubf78a0a6e00c46c5f03f09a96e79bb939",
    site: "datadoghq.com",
    service: "hts-airlines-angular-sdk",
    forwardErrorsToLogs: true,
    sessionSampleRate: 100,
    silentMultipleInit: true,
  };

  constructor() { 
    datadog.init(this._initConfig);
    this._logger = datadog.createLogger('angular-sdk');
    this._logger.setHandler( environment.production ? HandlerType.http : HandlerType.console);
    this._context = {
      data: {
        jsonPayload: {
          env:  environment.production ? 'production' : 'development',
        }
      }
    };
    this._logger.setContext(this._context);
  }

  public info(message: string): void {
    this._logger.info(message);
  }

  public warn(message: string): void {
    this._logger.warn(message);
  }

  public error(message: string): void {
    this._logger.error(message);
  }
}
