import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ListItem = ({
	id,
	title,
	streak,
	queryKey,
	href,
}: {
	id: number;
	title: string;
	queryKey?: string;
	streak?: number;
	href?: string;
}) => {
	const searchParams = useSearchParams();

	const selectedGoal = searchParams.get(queryKey || "");

	return (
		<Link
			aria-label={title}
			href={href || ""}
			className={`flex h-12 cursor-pointer  items-center justify-between bg-topbar pr-4 text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-[#446288] ${selectedGoal === id.toString() ? "bg-[#546287]" : "bg-topbar"
				}`}
		>
			<div className="flex h-full items-center gap-4">
				<span className="priority after:bg-white "></span>
				<p>{title}</p>
			</div>

			{streak && (
				<span className="flex items-center text-2xl font-semibold">
					<Image src="/assets/fire.png" alt="streak" height={36} width={36} className="p-2" />
					12
				</span>
			)}
		</Link>
	);
};

export default ListItem;
