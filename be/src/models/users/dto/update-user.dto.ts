import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: '2021-01-01T12:00:00.000Z',
    description:
      'The creation date and time of the user account in ISO 8601 format',
  })
  updatedAt: string;
}
