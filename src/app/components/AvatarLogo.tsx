import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarLogo = ({ imgSrc }: { imgSrc: string }) => {
	return (
		<Avatar>
			<AvatarImage src={imgSrc || "https://github.com/shadcn.png"} alt="@shadcn" />
			<AvatarFallback>Cn</AvatarFallback>
		</Avatar>
	);
};

export default AvatarLogo;
