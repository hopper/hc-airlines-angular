import { Injectable } from '@angular/core';
import {
  HandlerType,
  Logger,
  datadogLogs as datadog,
} from '@datadog/browser-logs';

import packageFile from '../../package.json';

@Injectable()
export class LoggerService {
  private _context: any = {};
  private _logger;
  private _env: string = 'production';

  constructor() {
    const _initConfig = {
      clientToken: 'pubc1227a869b47ba8b221db32fc8caacfc',
      site: 'us5.datadoghq.com',
      service: 'hts-airlines-angular-sdk',
      forwardErrorsToLogs: true,
      sessionSampleRate: 100,
      silentMultipleInit: true,
      version: packageFile.version,
    };

    datadog.init(_initConfig);

    this._logger = datadog.createLogger('angular-sdk');
    this._logger.setHandler(HandlerType.http);
    this._context = {
      data: {
        jsonPayload: {
          env: this._env,
        },
      },
    };
    this._logger.setContext(this._context);
  }

  // ----------------------------------------------------------
  // PUBLICS METHODS
  // ----------------------------------------------------------

  public setEnv(env?: string): void {
    this._env = env ? env : 'production';
    this._context.data.jsonPayload.env = env;
    this._logger.setContext(this._context);
    this._logger.setHandler(
      this._env === 'production'
        ? HandlerType.http
        : [HandlerType.http, HandlerType.console],
    );
  }

  public info(...params: Parameters<Logger['info']>) {
    this._logger.info(...params);
  }

  public warn(...params: Parameters<Logger['warn']>) {
    this._logger.warn(...params);
  }

  public error(...params: Parameters<Logger['error']>): void {
    this._logger.error(...params);
  }
}
