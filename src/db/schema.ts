import { date, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  role: text("role").$type<"admin" | "general">(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const goals = pgTable("goals", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  priority: text("priority"),
  deadline: date("deadline"),
  createdAt: timestamp("created_at"),
  user_id: text("user_id").notNull(),
});
