import type { Config } from "drizzle-kit";
export default {
    schema: "./src/models/index.ts",
    out: "./db/migrations",
} satisfies Config;
