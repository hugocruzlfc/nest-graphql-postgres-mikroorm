import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { join } from 'path';

const config: Options = {
  type: 'postgresql',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'nest-mykroorm',
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    path: join(__dirname, './migrations'),
  },
};

export default config;
