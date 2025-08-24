import pkg from 'pg';
const { Client } = pkg;
import config from '../../src/config/database.js';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

async function dropDatabase() {
  const client = new Client({
    user: dbConfig.username,
    host: dbConfig.host,
    password: dbConfig.password,
    port: dbConfig.port,
    database: 'postgres',
  });

  try {
    await client.connect();

    // Terminate all connections to the target database
    await client.query(`
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname = '${dbConfig.database}'
      AND pid <> pg_backend_pid();
    `);

    // Drop the database if it exists
    await client.query(`DROP DATABASE IF EXISTS ${dbConfig.database}`);

    console.log(`Database ${dbConfig.database} has been dropped successfully`);
  } catch (error) {
    console.error('Error dropping database:', error);
  } finally {
    await client.end();
  }
}

dropDatabase();