import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./models";

export const dbCredentials = {
    user: "postgres",
    password: "pass",
    host: "127.0.0.1",
    port: 5432,
    database: "app",
};

const client = new Client(dbCredentials);
export type DBConnection = NodePgDatabase<typeof schema>;

export async function getConnection() {
    await client.connect();
    return drizzle(client, { schema });
}

export * from './models';
