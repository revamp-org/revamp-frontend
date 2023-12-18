"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SetGoal } from "@/graphql/mutations.graphql";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useUser } from "@clerk/nextjs";
import { useForm, type FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setGoalChange } from "@/redux/features/goalSlice";
import Editor from "./Editor";
import { Icon } from "@iconify/react";

const CreateGoalDialog = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();
	const { user } = useUser();
	const [dialogOpen, setDialogOpen] = useState<boolean>(false);

	const [setGoal, { error }] = useMutation(SetGoal);
	const dispatch = useDispatch<AppDispatch>();

	const onSubmit = (data: FieldValues) => {
		setGoal({
			variables: {
				userId: user?.id,
				title: data.title,
				description: data.description,
			},
		});
		if (!isSubmitting) {
			reset();
			dispatch(setGoalChange());
			setDialogOpen(!dialogOpen);
		}
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
					<DialogTitle>Create Journal</DialogTitle>
					<DialogDescription>Describe your lovely day!</DialogDescription>
				</DialogHeader>

				<Editor />
			</DialogContent>
		</Dialog>
	);
};

export default CreateGoalDialog;
