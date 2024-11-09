import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'config.local.env' });

let dataSource: DataSource | null = null;
const isDocker = process.env.IS_DOCKER === 'true';
const host = isDocker ? 'postgres' : process.env.POSTGRES_HOST;

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: 'postgres',
      host: host,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
      entities: [`${__dirname}/src/**/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/src/database/migrations/*{.ts,.js}`],
    });

    await dataSource.initialize();
  }
  return dataSource;
};
