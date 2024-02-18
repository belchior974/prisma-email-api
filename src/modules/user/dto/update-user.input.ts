import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserUpdateInput {

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ defaultValue: true })
  active: boolean;

  @Field({ defaultValue: false })
  deleted: boolean;
}