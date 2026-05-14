import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  connectionString: string;
  jwtSecret: string;
  refreshTokenSecret: string;
}

const config: Config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  connectionString: process.env.DATABASE_URL ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET ?? '',
};

export default config;
