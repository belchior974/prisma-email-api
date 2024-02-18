import { Injectable } from '@nestjs/common';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(
    private prisma: PrismaService
  ) {}

  create(user: UserCreateInput) {
    return  this.prisma.user.create({
      data: user,
    })
  }

  users() {
    return this.prisma.user.findMany()
  }

  user(id: number) {
    return this.prisma.user.findUnique({where: {id: id}})
  }

  update(id: number, updateUserInput: UserUpdateInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
