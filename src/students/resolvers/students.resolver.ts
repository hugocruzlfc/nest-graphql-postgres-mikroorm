import { Query, Resolver } from '@nestjs/graphql';
import { StudentsService } from '../students.service';

@Resolver()
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  //Queries
  @Query(() => String)
  getStuff() {
    return 'This is a query';
  }
}
