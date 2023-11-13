import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: [],
      dbName: 'test',
      type: 'mongo',
      clientUrl: 'mongodb://localhost:27017',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
