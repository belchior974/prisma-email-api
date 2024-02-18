import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserCreateInput } from './dto/create-user.input';
import { UserUpdateInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('user') user: UserCreateInput) {
    return this.userService.create(user);
  }

  @Query(() => [User])
  users() {
    return this.userService.users();
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
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
