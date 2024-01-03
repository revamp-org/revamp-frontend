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
import { useForm, type FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setGoalChange } from "@/redux/features/goalSlice";
import { Textarea } from "@/components/ui/textarea";
import PriorityCombobox from "../PriorityComboBox";
import { Button } from "@/components/ui/button";

const GoalQuestion = ({ question, questionId }: { question: string; questionId: string }) => {
	return (
		<div className="space-y-1">
			<Label htmlFor="username" className=" text-foreground">
				{question}
			</Label>
			<Textarea placeholder={question} />
		</div>
	);
};

const CreateGoalDialog = () => {
	const [section, setSection] = useState(1);
	const [date, setDate] = useState<Date>();
	const [priority, setPriority] = useState<string>("normal");

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
	} = useForm();

	const { user } = useUser();
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const [setGoal, { error }] = useMutation(SetGoal);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: FieldValues) => {
		const deadlineTimestamp = date ? new Date(date).getTime() : null;
		await setGoal({
			variables: {
				userId: user?.id,
				title: data.title,
				description: data.description,
				priority: priority,
			},
		});
		reset();
		setDate(undefined);
		setPriority("normal");

		dispatch(setGoalChange());
		setDialogOpen(!dialogOpen);
		setSection(1);
	};

	return (
		<Dialog
			open={dialogOpen}
			onOpenChange={() => {
				setDialogOpen(!dialogOpen);
				reset();
				setDate(undefined);
			}}
		>
			<DialogTrigger asChild>
				<Button variant="outline">Create Goal</Button>
			</DialogTrigger>
			<DialogContent className=" sm:max-w-[30rem]">
				<DialogHeader>
					<DialogTitle>Create Goal</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you are done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
					{section === 1 && (
						<>
							<div className="space-y-1">
								<Label htmlFor="name" className="text-right text-foreground">
									Title
								</Label>
								<Input
									{...register("title", {
										required: "Please enter a title before submitting",
										minLength: {
											value: 3,
											message: "Please enter a title with at least 3 characters",
										},
										maxLength: {
											value: 100,
											message: "Please enter a title with fewer than 100 characters",
										},
									})}
									placeholder="goals..."
									className=" placeholder-red-500"
								/>
								{errors.title && (
									<p className=" text-center text-xs text-red-500">{`${errors.title.message}`}</p>
								)}
							</div>

							<div className="space-y-1">
								<Label htmlFor="username" className="text-right text-foreground">
									Description
								</Label>
								<Textarea
									{...register("description", {
										maxLength: {
											value: 255,
											message: "Please enter a description with fewer than 255 characters",
										},
									})}
									placeholder="Description..."
									className="col-span-3"
								/>
								{errors.description && (
									<p className="text-xs text-red-500">{`${errors.description.message}`}</p>
								)}
							</div>

							<section className="grid grid-cols-2 items-center gap-2 ">
								<div className="space-y-1">
									<Label htmlFor="username" className=" text-foreground">
										priority
									</Label>
									<PriorityCombobox setPriority={setPriority} />
									{/* <Input {...register("priority")} placeholder="priority..." className="col-span-3" /> */}
								</div>

								<div className=" space-y-1">
									<Label htmlFor="username" className=" text-foreground">
										deadline
									</Label>
									<DatePicker date={date} setDate={setDate} />
								</div>
							</section>
						</>
					)}

					{section === 2 && (
						<>
							<GoalQuestion question="What is your goal?" questionId="goal1" />
							<GoalQuestion question="What is your goal?" questionId="goal1" />
							<GoalQuestion question="What is your goal?" questionId="goal1" />
						</>
					)}

					{section == 2 ? (
						<DialogFooter>
							{error && <p className="text-foreground">Error: {error.message}</p>}
							<Button type="button" onClick={() => setSection(section - 1)}>
								Prev
							</Button>
							<Button disabled={isSubmitting || !isValid || section != 2} type="submit">
								Save changes
							</Button>
						</DialogFooter>
					) : (
						<DialogFooter>
							<Button type="button" onClick={() => setSection(section + 1)}>
								Next
							</Button>
						</DialogFooter>
					)}
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateGoalDialog;
