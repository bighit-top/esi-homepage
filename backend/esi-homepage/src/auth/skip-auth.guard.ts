import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class SkipAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const authMetaData = this.reflector.getAllAndOverride<string[]>('auth', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (authMetaData?.includes('skipAuthCheck')) {
      return true;
    }
  }
}
