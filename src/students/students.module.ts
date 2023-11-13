import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Student } from './entities/student.entity';
import { StudentsResolver } from './resolvers/students.resolver';

@Module({
  imports: [MikroOrmModule.forFeature([Student])],
  providers: [StudentsService, StudentsResolver],
})
export class StudentsModule {}
