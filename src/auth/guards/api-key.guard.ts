import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import config from 'src/config';
import { IS_PUBLIC_KEY } from '../decorators/public.decoratos';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  constructor(private _reflector: Reflector, @Inject(config.KEY) private _environments: ConfigType<typeof config>) { }


  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const isPublic = this._reflector.get(IS_PUBLIC_KEY, context.getHandler())

    if (isPublic) {
      return true
    }

    const request = context.switchToHttp().getRequest<Request>()
    const header = request.header('auth')
    if (header != this._environments.token) {
      throw new UnauthorizedException('Not allow')
    }

    return true
  }
}
