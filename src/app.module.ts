import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyDataModule } from './body-data/body-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://traps:traps@cluster0.kuac6.mongodb.net/body-data?retryWrites=true&w=majority',
    ),
    BodyDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
