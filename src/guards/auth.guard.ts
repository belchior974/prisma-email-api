import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtUtils } from 'src/utils/token.utils';


@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { token } = context.getArgs()[2];
    JwtUtils.decodeToken(token);
    return true;
  }
}
