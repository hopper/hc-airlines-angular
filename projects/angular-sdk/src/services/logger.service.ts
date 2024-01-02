import { Injectable, Inject } from '@angular/core';
import { HandlerType, datadogLogs as datadog } from '@datadog/browser-logs';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  private _context: any = {};
  private _logger;

  constructor(@Inject('env') env: string = 'production') { 
    const _initConfig = {
      clientToken: "pubf78a0a6e00c46c5f03f09a96e79bb939",
      site: "datadoghq.com",
      service: "hts-airlines-angular-sdk",
      env: env,
      forwardErrorsToLogs: true,
      sessionSampleRate: 100,
      silentMultipleInit: true,
    };

    datadog.init(_initConfig);
    this._logger = datadog.createLogger('angular-sdk');
    this._logger.setHandler( env = "production" ? HandlerType.http : HandlerType.console);
    this._context = {
      data: {
        jsonPayload: {
          env: env,
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
