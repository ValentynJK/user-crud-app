import 'dotenv/config';

interface DBEnvConfig {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  port: number | undefined;
  dialect: string | undefined;
  logging: boolean | undefined;
}

interface DBConfig {
  [key: string]: DBEnvConfig;
}

const config: DBConfig = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false, // Set to console.log to see SQL queries
  },
};

export default config;