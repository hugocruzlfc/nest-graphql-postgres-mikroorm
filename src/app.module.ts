import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { StudentsModule } from './students/students.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      playground: true,
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    MikroOrmModule.forRoot(),
    StudentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
