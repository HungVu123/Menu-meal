import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
  })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'John',
    description: 'The first name of the user',
  })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user',
  })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'The phone number of the user in international format',
  })
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'Male',
    description: 'The gender of the user',
  })
  gender?: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'The date of birth of the user in YYYY-MM-DD format',
  })
  dob?: string;

  @ApiProperty({
    example: 'description',
    description: 'A brief description or bio of the user',
  })
  desc?: string;

  @ApiProperty({
    example: 'https://example.com/profile/johndoe.jpg',
    description: 'URL to the user’s profile photo',
  })
  profilePhoto?: string;

  @ApiProperty({
    example: '123 Main St, Anytown, USA',
    description: 'The address of the user',
  })
  address?: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    description: 'The date the user joined, in ISO 8601 format',
  })
  joinDate?: Date;

  @ApiProperty({
    example: '2021-12-31T23:59:59.000Z',
    description: 'The last login date and time of the user in ISO 8601 format',
  })
  lastLogin?: Date;

  @ApiProperty({
    example: '2021-01-01T12:00:00.000Z',
    description:
      'The creation date and time of the user account in ISO 8601 format',
  })
  createdAt: string;
}
