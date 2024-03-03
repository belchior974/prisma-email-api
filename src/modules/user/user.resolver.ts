import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import {
  Arg,
  // Args,
  Authorized,
  Ctx,
  // Mutation,
  // Query,
  // Resolver,
  UseMiddleware,
} from "type-graphql"
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';
import { Token } from './dto/token/token.model';
import { UserFilterInput } from './dto/user-filter.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
// import { CustomAuthGuard } from 'src/services/auth/Authenticated';

// @UseGuards(AuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(CustomAuthGuard)
  // @UseGuards(AuthGuard)
  @Mutation(() => Token)
  async authenticate(
    @Args('email') email: string,
    @Args('password') password: string,
    ): Promise<Token>{
    return this.userService.authenticate(email, password);
  }

  
  @Mutation(() => User)
  createUser(@Args('user') user: UserCreateInput) {
    return this.userService.create(user);
  }

  @UseGuards(AuthGuard)
  @Query(() => [User])
  users(
    @Args('filters') filters: UserFilterInput
  ) {
    return this.userService.users(filters);
  }

  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.userService.user(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UserUpdateInput
    ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.delete(id);
  }
}
