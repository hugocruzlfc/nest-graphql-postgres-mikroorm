import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Student {
  @PrimaryKey()
  id!: number;

  @Property()
  createAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updateAt = new Date();

  @Property()
  name!: string;

  @Property()
  email!: string;

  @Property()
  age!: number;
}
