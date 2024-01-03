import { Injectable, Inject, Optional } from '@angular/core';
import { HandlerType, datadogLogs as datadog } from '@datadog/browser-logs';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  private _context: any = {};
  private _logger;
  private _env: string = "production";

  constructor() { 
    const _initConfig = {
      clientToken: "pubf78a0a6e00c46c5f03f09a96e79bb939",
      site: "datadoghq.com",
      service: "hts-airlines-angular-sdk",
      forwardErrorsToLogs: true,
      sessionSampleRate: 100,
      silentMultipleInit: true,
    };

    datadog.init(_initConfig);
    this._logger = datadog.createLogger('angular-sdk');
    this._logger.setHandler(HandlerType.http);
    this._context = {
      data: {
        jsonPayload: {
          env: this._env,
        }
      }
    };
    this._logger.setContext(this._context);
  }

  public setEnv(env?: string): void {
    this._env = env ? env : "production";
    datadog.setGlobalContext({ env: this._env })
    this._context.data.jsonPayload.env = env;
    this._logger.setContext(this._context);
    this._logger.setHandler(this._env === "production" ? HandlerType.http : HandlerType.console);
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
