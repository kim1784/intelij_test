import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'testdb',
  extra: {
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  },
  entities: [__dirname + '/../{src,dist}/**/entities/*{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
};
