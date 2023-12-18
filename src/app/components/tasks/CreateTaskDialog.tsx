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
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useMutation } from "@apollo/client";
import { Icon } from "@iconify/react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SetTask } from "@/graphql/mutations.graphql";
import { setTaskChange } from "@/redux/features/taskSlice";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { DatePicker } from "../datePicker";
import { Goal } from "@/generated/graphql";

const CreateTaskDialog = () => {
	const searchParams = useSearchParams();
	const goalsWithoutDetails: Goal[] = useAppSelector((state) => state.goal.goals);
	const selectedGoal = +(searchParams.get("goalid") || goalsWithoutDetails?.[0]?.goalId);
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const [setTask, { error }] = useMutation(SetTask);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: FieldValues) => {
		await setTask({
			variables: {
				goalId: selectedGoal,
				title: data.title,
				description: data.description,
			},
		});
		reset();
		dispatch(setTaskChange());
		setDialogOpen(!dialogOpen);
	};

	return (
		<Dialog
			open={dialogOpen}
			onOpenChange={() => {
				setDialogOpen(!dialogOpen);
				reset();
			}}
		>
			<DialogTrigger asChild>
				<button>
					<Icon
						icon="material-symbols:add"
						className="absolute bottom-4 right-4 cursor-pointer rounded-full bg-gray-500 p-2 text-5xl transition-all ease-in-out hover:bg-gray-300 hover:bg-opacity-10 "
					/>
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create Task</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you are done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
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
							placeholder="tasks..."
							className="col-span-3 placeholder-red-500"
						/>
					</div>
					{errors.title && (
						<p className="text-center text-xs text-red-500 ">{`${errors.title.message}`}</p>
					)}
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right text-foreground">Description</Label>
						<Input
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
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right text-foreground">
							priority
						</Label>
						<Input {...register("priority")} placeholder="priority..." className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right text-foreground">
							deadline
						</Label>
						<DatePicker />
					</div>{" "}
					<DialogFooter>
						{error && <p className="text-foreground">Error: {error.message}</p>}
						<Button disabled={isSubmitting} type="submit">
							Save changes
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateTaskDialog;
