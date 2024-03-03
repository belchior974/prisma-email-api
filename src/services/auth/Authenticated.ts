// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';
// import { AuthChecker } from 'type-graphql';
// import { JwtUtils } from 'src/utils/token.utils';
// import { UserToken } from 'src/modules/user/dto/token/user-token.model';
// import { Token } from 'src/modules/user/dto/token/token.model';

// @Injectable()
// export class CustomAuthGuard implements CanActivate {
//   constructor(private readonly authChecker: AuthChecker<Token>) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const gqlContext = GqlExecutionContext.create(context);
//     const { root, args, context: gqlCtx, info } = gqlContext.getContext();
    
//     // Extract token from context
//     const token = gqlCtx.token;

//     // Use authChecker provided by TypeGraphQL
//     return this.authChecker({ root, args, context: gqlCtx, info }, []);
//   }
// }

// export const customAuthChecker: AuthChecker<Token> = async ({ root, args, context, info }, roles) => {
//   const decodedToken = JwtUtils.decodeToken(context.token);

//   if (!!decodedToken) {
//     const user: UserToken = {
//       id: parseInt(decodedToken['id']),
//       email: decodedToken['email'],
//       name: decodedToken['nome'],
//       id_profile: decodedToken['id_profile'],
//     }

//     context.user = user;

//     // Implementação da lógica de verificação de autorização aqui
//     // Por enquanto, retornando true sempre, você pode substituir pela lógica adequada
//     return true;
//   } else {
//     throw new Error("Token de acesso inválido ou inexistente!")
//   }
// };
