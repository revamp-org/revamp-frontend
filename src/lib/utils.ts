import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDate = (date: string) => {
	const postCreatedAt = new Date(date);
	const currentTimestamp = new Date().getTime();

	const timeDiff = currentTimestamp - postCreatedAt.getTime();

	const oneHour = 60 * 60 * 1000;
	const oneDay = 24 * oneHour;
	const oneWeek = 7 * oneDay;

	let formattedTime;

	if (timeDiff < oneHour) {
		const minutes = Math.floor(timeDiff / (60 * 1000));
		formattedTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else if (timeDiff < oneDay) {
		const hours = Math.floor(timeDiff / oneHour);
		formattedTime = `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else if (timeDiff < oneWeek) {
		const days = Math.floor(timeDiff / oneDay);
		formattedTime = `${days} day${days > 1 ? "s" : ""} ago`;
	} else {
		const date = new Date(postCreatedAt);
		const month = date.toLocaleString("default", { month: "short" });
		const day = date.getDate();
		formattedTime = `${month} ${day}`;
	}

	return formattedTime;
};

export const fullDate = (date: string) => {
	const dbDate = new Date(date);

	const formattedDate = dbDate.toLocaleString("default", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	return formattedDate;
};
