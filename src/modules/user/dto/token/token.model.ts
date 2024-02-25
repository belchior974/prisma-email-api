import { Field, ObjectType } from "@nestjs/graphql";
import { UserToken } from "./user-token.model";

@ObjectType()
export class Token {

    @Field()
    token: string;

    @Field({nullable: true})
    user?: UserToken
}
