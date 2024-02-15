import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const dbCredentials = {
    user: "postgres",
    password: "pass",
    host: "127.0.0.1",
    port: 5432,
    database: "app",
};

const client = new Client(dbCredentials);

export async function getConnection() {
    await client.connect();
    return drizzle(client);
}

export * from './models';
