import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  password: string;

  @Prop()
  createdAt: Date;

  @Prop()
  gender?: string;

  @Prop()
  dob?: string;

  @Prop()
  desc?: string;

  @Prop()
  profilePhoto?: string;

  @Prop()
  address?: string;

  @Prop()
  joinDate?: Date;

  @Prop()
  lastLogin?: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
