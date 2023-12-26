"use client";
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
import { AppDispatch } from "@/redux/store";
import { useMutation } from "@apollo/client";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { SetTodo } from "@/graphql/mutations.graphql";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { setTodoChange } from "@/redux/features/todoSlice";
import { Icon } from "@iconify/react";

const CreateTodoDialog = () => {
	const searchParams = useSearchParams();
	const selectedTask = searchParams.get("taskid");
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const [setTodo, { error }] = useMutation(SetTodo);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = async (data: FieldValues) => {
		await setTodo({
			variables: {
				taskId: +selectedTask!,
				todo: data.todo,
			},
		});
		reset();
		dispatch(setTodoChange());
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
						<Label htmlFor="todo" className="text-right text-foreground">
							Todo
						</Label>
						<Input
							{...register("todo", {
								required: "Please enter a todo before submitting",
								minLength: {
									value: 3,
									message: "Please enter a todo  with at least 3 characters",
								},
								maxLength: {
									value: 100,
									message: "Please enter a todo with fewer than 100 characters",
								},
							})}
							placeholder="todo..."
							className="col-span-3 placeholder-red-500"
						/>
					</div>
					{errors.todo && (
						<p className="text-center text-xs text-red-500 ">{`${errors.todo.message}`}</p>
					)}
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

export default CreateTodoDialog;
