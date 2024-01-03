import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
	itemName,
	editItem,
	deleteItem,
}: {
	itemName: string;
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
					title={`Edit ${itemName}`}
					handleClick={() => {
						editItem?.();
						setIsMenuOpen(false);
					}}
				/>
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<button>
							<MenuItem icon="fluent:delete-32-regular" title={`Delete ${itemName}`} />
						</button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader className="text-foreground">
							<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will permanently delete your goals and its
								corresponding tasks
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className="text-muted-foreground">Cancel</AlertDialogCancel>
							<AlertDialogAction
								onClick={() => {
									deleteItem?.();
									setIsMenuOpen(false);
								}}
							>
								Continue
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</PopoverContent>
		</Popover>
	);
}
