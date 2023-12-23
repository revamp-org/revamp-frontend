import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const MenuItem = ({
	icon,
	title,
	handleClick,
}: {
	icon: string;
	title: string;
	handleClick?: () => void;
}) => {
	return (
		<button
			onClick={handleClick}
			className="flex w-full items-center gap-2  rounded-sm px-2 py-1 hover:bg-accent"
		>
			<Icon icon={icon} />
			<p className="text-left text-sm">{title}</p>
		</button>
	);
};

export function MenuPopover({
	editItem,
	deleteItem,
}: {
	editItem?: () => void;
	deleteItem?: () => void;
}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Popover open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
			<PopoverTrigger asChild>
				<button>
					<Icon
						aria-label="icon"
						icon="bi:three-dots"
						className="cursor-pointer rounded-sm p-1 text-2xl transition-all ease-in-out hover:bg-gray-300 hover:bg-opacity-10 "
					/>
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-40">
				<MenuItem
					icon="mingcute:edit-line"
					title="Edit Goal"
					handleClick={() => {
						editItem?.();
						setIsMenuOpen(false);
					}}
				/>
				<MenuItem
					icon="fluent:delete-32-regular"
					title="Delete Goal"
					handleClick={() => {
						deleteItem?.();
						setIsMenuOpen(false);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
