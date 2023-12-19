import { LogOut, Settings, User } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";
import AvatarLogo from "./AvatarLogo";

export function AvatarMenu() {
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button>
					<AvatarLogo />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>

					<DropdownMenuItem onClick={() => router.push("/dashboard")}>
						<Icon icon="radix-icons:dashboard" className="mr-2 h-4 w-4" />
						<span>Go to Dashboard</span>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
