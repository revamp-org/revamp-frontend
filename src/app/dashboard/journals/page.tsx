"use client";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import type EditorJS from "@editorjs/editorjs";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { BiDotsHorizontal } from "react-icons/bi";

const CreatePost = () => {
	const date = new Date();
	const todayDate: string = date.toDateString();

	const [title, setTitle] = useState<string>(todayDate);
	const [enabled, setEnabled] = useState<boolean>(false);
	const titleInputRef = useRef<HTMLInputElement>(null);

	const router = useRouter();

	const notify = () =>
		toast.success("Blog posted. Do Blog!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});

	const addPost = async () => {
		try {
			notify();
		} catch (error) {
			console.log(error);
		}
	};

	const editorRef = useRef(null);

	const intializedEditor = useCallback(async () => {
		const Quill = (await import("quill")).default;

		if (editorRef.current) {
			const quill = new Quill(editorRef.current, {
				modules: {
					toolbar: [
						[{ header: [1, 2, false] }],
						["bold", "italic", "underline"],
						["image", "code-block"],
					],
				},
				placeholder: "Compose an epic...",
				theme: "snow",
			});

			console.log("hey", quill);
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && typeof document != "undefined") {
			setEnabled(true);
		}
	}, []);

	useEffect(() => {
		const init = async () => {
			await intializedEditor();
		};

		if (enabled) {
			init();
			return () => { };
		}
	}, [enabled, intializedEditor]);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		try {
			await addPost();
			router.push("journals/daily");
		} catch (error) {
			console.log("can't add to the firebase");
		}
	};

	return (
		<div className=" w-full">
			<div className="sticky top-0 z-10 flex h-16 items-center  justify-between px-[20%]">
				<div className="flex items-center gap-4 ">
					<p className="text-xl  text-foreground lg:text-xl ">{todayDate}</p>
				</div>

				<div className="flex items-center gap-2">
					<button
						className={`px-4 py-2 ${title ? "bg-accent" : "bg-accent opacity-60"} rounded-full`}
						onClick={handleSubmit}
					>
						Publish
					</button>
					<button title="More Settings">
						<BiDotsHorizontal className="post-icon" />
					</button>
				</div>
			</div>

			{/* form section*/}
			<form
				action="submit"
				onSubmit={handleSubmit}
				className="mx-auto   w-[90%] rounded-md  p-4 lg:max-w-[50%]"
			>
				<input
					placeholder="Title"
					ref={titleInputRef}
					className="h-full w-full resize-none bg-transparent px-4 py-2 text-xl font-bold outline-none lg:text-3xl"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div
					ref={editorRef}
					className=" mx-auto h-[calc(100dvh-8rem)]  min-h-full max-w-[90%]  overflow-y-auto text-base text-white lg:text-lg "
				/>
			</form>
		</div>
	);
};

export default CreatePost;
