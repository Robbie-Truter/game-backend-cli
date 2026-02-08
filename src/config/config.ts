import dotenv from 'dotenv';

dotenv.config();

interface Config {
  port: number;
  connectionString: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  connectionString: process.env.DATABASE_URL ?? '',
};

export default config;
