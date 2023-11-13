import { Migration } from '@mikro-orm/migrations';

export class Migration20231113180421 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "student" ("id" serial primary key, "create_at" timestamptz(0) not null, "update_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "age" int not null);',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "student" cascade;');
  }
}
