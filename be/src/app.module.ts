import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017')],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
