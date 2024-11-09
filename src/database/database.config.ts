import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'config.local.env' });
const isDocker = process.env.IS_DOCKER === 'true';
const host = isDocker ? 'postgres' : process.env.POSTGRES_HOST;

export default registerAs('database', () => ({
  type: 'postgres',
  host: host,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
  logging: process.env.POSTGRES_LOGGING === 'true',
}));
