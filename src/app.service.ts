import { Inject, Injectable } from '@nestjs/common';
import config from './config'
import { ConfigType } from "@nestjs/config";

@Injectable()
export class AppService {

  constructor(@Inject(config.KEY) private _config: ConfigType<typeof config>) { }

  getHello(): string {
    return this._config.environment;
  }
}
