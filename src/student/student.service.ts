import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: EntityRepository<Student>,
    private readonly em: EntityManager,
  ) {}

  async createStudent(
    name: string,
    email: string,
    age: number,
  ): Promise<Student> {
    try {
      const student = this.em.create(Student, { name, email, age });
      await this.em.persistAndFlush(student);
      return student;
    } catch (error) {
      throw new Error(error);
    }
  }
}
