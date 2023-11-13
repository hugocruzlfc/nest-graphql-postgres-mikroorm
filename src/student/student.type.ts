import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field(() => ID)
  id: number;

  @Field()
  createAt: Date;

  @Field()
  updateAt: Date;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}
