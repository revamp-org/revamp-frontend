"use client";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
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
	const [quillInialized, setQuillInialized] = useState<boolean>(false);
	const [editorContent, setEditorContent] = useState({});

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

	const editorRef = useRef(null);

	const intializedEditor = useCallback(async () => {
		const Quill = (await import("quill")).default;

		if (editorRef.current && !quillInialized) {
			const quill = new Quill(editorRef.current, {
				modules: {
					toolbar: [
						[{ header: [1, 2, false, 3, false] }],
						["bold", "italic", "underline", "strike", "blockquote"],
						[{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
						["image", "code-block"],
					],
				},
				placeholder: "Compose an epic...",
				theme: "snow",
			});

			// Listen for changes in the Quill editor content
			quill.on("text-change", () => {
				const content = quill.getContents();
				setEditorContent(content);
			});
			quill.focus();

			setQuillInialized(true);

			console.log("hey", quill);
		}
	}, [quillInialized]);

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

	const addPost = async () => {
		try {
			document.write(JSON.stringify(editorContent));
			notify();
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		try {
			await addPost();
		} catch (error) {
			console.log("can't add to the firebase");
		}
	};

	return (
		<div className=" w-full">
			<div className="sticky top-0 z-10 flex h-16 items-center justify-between px-[10%]">
				<p className="text-xl  text-foreground lg:text-xl ">{todayDate}</p>

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
				<div ref={editorRef} />
			</form>
		</div>
	);
};

export default CreatePost;
