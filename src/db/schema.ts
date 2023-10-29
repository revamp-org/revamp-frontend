import { int, text, mysqlTable, timestamp, date } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").$type<"admin" | "general">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const goals = mysqlTable("goals", {
  id: int("id").primaryKey().autoincrement(),
  title: text("title").notNull(),
  description: text("description"),
  priority: text("priority"),
  deadline: date("deadline"),
  createdAt: timestamp("created_at"),
  user_id: int("user_id").notNull(),
});
