CREATE TABLE `goals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`priority` text,
	`deadline` date,
	`created_at` timestamp,
	CONSTRAINT `goals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `email` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `password` text NOT NULL;