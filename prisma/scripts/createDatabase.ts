import config from "../../src/config/database";
import pkg from "pg";
const { Client } = pkg;

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

async function createDatabase() {
  const client = new Client({
    user: dbConfig.username,
    host: dbConfig.host,
    password: dbConfig.password,
    port: dbConfig.port,
  });
  try {
    await client.connect();
    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = '${dbConfig.database}'`,
    );

    if (res.rows.length > 0) {
      console.log(`Database "${dbConfig.database}" already exists`);
      return;
    } else {
      console.log(`Creating database "${dbConfig.database}"...`);
      await client.query(`CREATE DATABASE ${dbConfig.database};`);
      console.log(`Database "${dbConfig.database}" created successfully`);
    }
  } catch (error: any) {
    console.error("Error creating database:", error);
    console.error("Error creating database:", error.message);
  } finally {
    await client.end();
  }
}

createDatabase();
