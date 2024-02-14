import type { Config } from "drizzle-kit";
export default {
    schema: "./src/db/models/index.ts",
    out: "./src/db/migrations",
} satisfies Config;
