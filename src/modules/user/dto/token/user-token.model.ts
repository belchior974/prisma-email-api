import { Field, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UserToken {

  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  email: string

  @Field(() => Int)
  id_profile: number
}