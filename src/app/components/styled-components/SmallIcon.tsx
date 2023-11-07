import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const SmallIcon = ({ icon, className }: { icon: string; className?: string }) => {
	return (
		<Icon
			icon={icon}
			className={cn(
				"cursor-pointer rounded-sm p-1 text-2xl transition-all ease-in-out hover:bg-gray-300 hover:bg-opacity-10 ",
				className,
			)}
		/>
	);
};

export default SmallIcon;
