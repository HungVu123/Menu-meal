import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'src/common/interceptors/response.interceptor';
import { CustomException } from 'src/common/exceptions/custom.exception';

@ApiTags('Users')
@Controller('users')
@UseInterceptors(ResponseInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const newStudent = await this.usersService.create(createUserDto);
      return {
        message: 'User retrieved successfully',
        data: newStudent,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Get('error')
  throwError() {
    throw new Error('This is error!');
  }

  @Get('customError')
  throwCustomError() {
    throw new CustomException(400, 'This is a custom error!');
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
