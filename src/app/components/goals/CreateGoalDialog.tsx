import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "../datePicker";
import { SetGoal } from "@/graphql/mutations.graphql";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";

const CreateGoalDialog = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState("");
	const [deadline, setDeadline] = useState("");
	const { user } = useUser();
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const [setGoal, { data, loading, error }] = useMutation(SetGoal);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setGoal({
			variables: {
				userId: user?.id,
				title: title,
				description: description,
			},
		});
		setDialogOpen(!dialogOpen);
	};

	return (
		<Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
			<DialogTrigger asChild>
				<Button variant="outline">Create Goal</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Goal</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you are done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right text-foreground">
							Title
						</Label>
						<Input
							id="name"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="tasks..."
							className="col-span-3 placeholder-red-500"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right text-foreground">
							Description
						</Label>
						<Input
							id="username"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Description..."
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right text-foreground">
							priority
						</Label>
						<Input id="username" placeholder="priority..." className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right text-foreground">
							deadline
						</Label>
						<DatePicker />
					</div>{" "}
					<DialogFooter>
						{error && <p className="text-foreground">Error: {error.message}</p>}
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateGoalDialog;
