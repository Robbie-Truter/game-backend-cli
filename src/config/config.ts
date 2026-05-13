import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  connectionString: string;
  jwtSecret: string;
}

const config: Config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  connectionString: process.env.DATABASE_URL ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
};

export default config;
