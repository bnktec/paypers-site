import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@/lib/schema";

const globalForDb = globalThis as unknown as {
  pool: pg.Pool | undefined;
  db: ReturnType<typeof drizzle> | undefined;
};

function getPool() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
  }

  if (!globalForDb.pool) {
    globalForDb.pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  return globalForDb.pool;
}

function getDb() {
  if (!globalForDb.db) {
    globalForDb.db = drizzle(getPool(), { schema });
  }
  return globalForDb.db;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
  get(_target, prop) {
    const realDb = getDb();
    const value = (realDb as unknown as Record<string | symbol, unknown>)[prop];
    if (typeof value === "function") {
      return value.bind(realDb);
    }
    return value;
  },
});
