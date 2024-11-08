import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: 'config.local.env' });

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
}));
