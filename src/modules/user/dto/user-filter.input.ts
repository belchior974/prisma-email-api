import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserFilterInput {


  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  active: boolean;

  @Field({ nullable: true })
  deleted: boolean;

}