import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserUpdateInput {

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ defaultValue: true, nullable: true })
  active: boolean;

  @Field({ defaultValue: false, nullable: true })
  deleted: boolean;
}