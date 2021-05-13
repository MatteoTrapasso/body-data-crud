import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BodyDataModule } from './body-data/body-data.module';
import { MongooseModule } from '@nestjs/mongoose';
import {Module, MiddlewareConsumer, RequestMethod, Delete} from '@nestjs/common';
import {AuthenticationMiddleware} from "./common/authentication.middleware";

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
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(AuthenticationMiddleware)
        .forRoutes(
            { path: 'body-data', method: RequestMethod.ALL }
        );
  }
}
