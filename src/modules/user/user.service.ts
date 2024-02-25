import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto';

import { JwtUtils } from 'src/utils/token.utils';
import { Token } from './dto/token/token.model';
import { UserFilterInput } from './dto/user-filter.input';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService
  ) { }

  async authenticate(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
        password: await this.mountPasswordHash(password)
      }
    });

    if (!user) {
      throw new Error("Usuário ou senha inválidos");
    }

    const token: Token = {
      token: await JwtUtils.generateToken(user),
      user: user
    }

    return token;
  }

  async create(user: UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...user,
        password: await this.mountPasswordHash('123@mudar')
      }
    })
  }

  users(filters: UserFilterInput) {
    return this.prisma.user.findMany({
      where: {
        ...filters
      }
    })
  }

  user(id: number) {
    return this.prisma.user.findUnique({ where: { id: id } })
  }

  async update(id: number, updateUserInput: UserUpdateInput) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...updateUserInput,
        password: await this.mountPasswordHash(updateUserInput.password),
        updated_at: new Date()
      }
    })
  }

  delete(id: number) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        deleted: true,
        active:  false,
      }
    })
  }

  async mountPasswordHash(password: string) {
    const concatenatedPassword = password + process.env.GLOBAL_SALT_KEY;

    const md5Hash = crypto.createHash('md5');
    md5Hash.update(concatenatedPassword);

    return md5Hash.digest('hex')
  }
}
