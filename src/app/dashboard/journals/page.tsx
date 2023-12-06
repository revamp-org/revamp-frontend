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
			const blocks = await editorRef.current?.save();

			notify();
		} catch (error) {
			console.log(error);
		}
	};

	const editorRef = useRef<EditorJS>();

	const intializedEditor = useCallback(async () => {
		const Editorjs = (await import("@editorjs/editorjs")).default;
		const Header = (await import("@editorjs/header")).default;
		// @ts-ignore
		const List = (await import("@editorjs/list")).default; // @ts-ignore
		const Embed = (await import("@editorjs/embed")).default; // @ts-ignore
		const Code = (await import("@editorjs/code")).default; // @ts-ignore
		const InlineCode = (await import("@editorjs/code")).default; // @ts-ignore
		const LinkTool = (await import("@editorjs/link")).default; // @ts-ignore
		const Table = (await import("@editorjs/table")).default; // @ts-ignore
		const ImageTool = (await import("@editorjs/image")).default; // @ts-ignore

		if (!editorRef.current) {
			console.log("Initialization of editor js is happening");
			const editor = new Editorjs({
				/**
				 * Id of Element that should contain the Editor
				 */
				holder: "editorjs",
				autofocus: true,

				onReady: () => {
					console.log("Editor.js is ready to work!");
					editorRef.current = editor;
				},
				placeholder: "Do blog with one click!",
				inlineToolbar: true,
				data: { blocks: [] },

				tools: {
					header: Header,
					LinkTool: {
						class: LinkTool,
						config: {
							endpoint: "api/link",
						},
					},
					image: {
						class: ImageTool,
						config: {
							uploader: {},
						},
					},
					list: List,
					embed: Embed,
					code: Code,
					table: Table,
				},
			});
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setEnabled(true);
		}
	}, []);

	useEffect(() => {
		const init = async () => {
			await intializedEditor();

			setTimeout(() => {});
		};

		if (enabled) {
			init();
			return () => {};
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
				className="mx-auto  w-[90%] rounded-md  p-4 lg:max-w-[50%]"
			>
				<input
					placeholder="Title"
					ref={titleInputRef}
					className="h-full w-full resize-none bg-transparent px-4 py-2 text-xl font-bold outline-none lg:text-3xl"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div
					id="editorjs"
					className=" mx-auto h-[calc(100dvh-8rem)]  min-h-full max-w-[90%]  overflow-y-auto text-base lg:text-lg "
				/>
			</form>
		</div>
	);
};

export default CreatePost;
