import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SmallIcon = ({
	icon,
	className,
	handleClick,
}: {
	icon: string;
	className?: string;
	handleClick?: () => void;
}) => {
	return (
		<button onClick={handleClick}>
			<Icon
				aria-label={icon}
				icon={icon}
				className={cn(
					"cursor-pointer rounded-sm p-1 text-2xl transition-all ease-in-out hover:bg-gray-300 hover:bg-opacity-10 ",
					className,
				)}
			/>
		</button>
	);
};

export default SmallIcon;
