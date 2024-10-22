import { Field, InputType } from '@nestjs/graphql';
import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Field()
  @IsNotEmpty()
  @IsDate()
  updateAt: Date;

  @Field()

  deletedAt: Date
}

@InputType()
export class UserUpdateInput extends UserCreateInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  id: string;
}
