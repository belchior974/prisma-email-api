import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  active: boolean;

  @Field()
  deleted: boolean;

  @Field(() => Int)
  id_profile: number

  @Field()
  created_at: Date

  @Field()
  updated_at: Date

}

