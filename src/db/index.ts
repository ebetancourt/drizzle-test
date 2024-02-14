import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    host: "db",
    port: 5432,
    user: "postgres",
    password: "pass",
    database: "app",
});

await client.connect();

export const db = drizzle(client);
export * from './models';
