"use client";
import EditorJS from "@editorjs/editorjs";
import { useCallback, useEffect, useRef, useState } from "react";

const Editor = () => {
	const editorRef = useRef<EditorJS>();
	const [enabled, setEnabled] = useState<boolean>(false);

	const intializedEditor = useCallback(async () => {
		const Editorjs = (await import("@editorjs/editorjs")).default; // @ts-ignore
		const Header = (await import("@editorjs/header")).default; // @ts-ignore
		const List = (await import("@editorjs/list")).default; // @ts-ignore
		const Embed = (await import("@editorjs/embed")).default; // @ts-ignore
		const Code = (await import("@editorjs/code")).default; // @ts-ignore
		const InlineCode = (await import("@editorjs/code")).default; // @ts-ignore
		const LinkTool = (await import("@editorjs/link")).default; // @ts-ignore
		const Table = (await import("@editorjs/table")).default; // @ts-ignore
		const ImageTool = (await import("@editorjs/image")).default; // @ts-ignore

		if (!editorRef.current) {
			const editor = new Editorjs({
				holder: "editorjs",
				autofocus: true,

				onReady: () => {
					console.log("Editor.js is ready to work!");
					editorRef.current = editor;
				},
				placeholder: "Create amazing journal with one click!",
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
							uploader: {
								async uploadByFile(_file: File) {
									console.log("hello");
								},
							},
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

			setTimeout(() => { });
		};

		if (enabled) {
			init();

			return () => { };
		}
	}, [enabled, intializedEditor]);

	return (
		<div className=" max-h-[330px] overflow-auto  text-foreground">
			<div id="editorjs" className="" />
		</div>
	);
};

export default Editor;
