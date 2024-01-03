"use client";
import AvatarLogo from "@/app/components/AvatarLogo";
import { Button } from "@/components/ui/button";
import { Journal } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { GetSingleJournal } from "@/graphql/queries.graphql";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Delta from "quill-delta";

interface Props {
	className?: string;
}

export default function JournalPage({ params }: { params: { journalId: string } }) {
	const [journal, setJournal] = useState<Journal>();
	const [loading, setLoading] = useState(true);
	const [quillContent, setQuillContent] = useState<Delta>();
	const [lines, setLines] = useState<string[]>([]);
	const {
		error: _error,
		data,
		loading: fetchLoading,
	} = useQuery(GetSingleJournal, {
		variables: {
			journalId: +params.journalId,
		},
	});

	useEffect(() => {
		if (data) {
			setJournal(data.getSingleJournal);
			console.log(data);
			setLoading(false);
		}
	}, [setJournal, data]);

	useEffect(() => {
		if (journal) {
			setQuillContent(new Delta(JSON.parse(journal.content)));
		}
	}, [journal]);

	useEffect(() => {
		if (quillContent) {
			const plainText = quillContent.reduce((text, op) => {
				return typeof op.insert === "string" ? text + op.insert : text;
			}, "");

			const lines = plainText.split("\n");
			setLines(lines);
		}
	}, [quillContent]);

	if (loading) {
		return <p>Loading...</p>;
	}

	return (
		<div className="mx-auto flex h-full w-full max-w-[--screen-max]  grid-cols-3 items-start  gap-4 p-4  text-white">
			{/* blog section */}
			<div className="h-full w-full ">
				<div className="mb-6"></div>
				<article className="h-full">
					<div className="mb-4">
						<div className="mb-2 flex items-center space-x-2">
							<AvatarLogo imgSrc={journal?.createdBy.imageUrl} />
							<div>
								<div className="text-sm ">
									{journal?.createdBy.firstName + " " + journal?.createdBy.lastName}
								</div>
								<div className="text-xs ">Posted on {formatDate(journal?.date)}</div>
							</div>
						</div>

						{lines.map((line, index) => {
							return (
								<p key={index} className="mt-4">
									{line}
								</p>
							);
						})}
					</div>
				</article>
				<div className="mt-4 flex space-x-6">
					<div className="flex items-center">
						<ThumbsUpIcon className="h-4 w-4" />
						<span className="ml-2">React</span>
					</div>
					<div className="flex items-center">
						<SpeakerIcon className="h-4 w-4" />
						<span className="ml-2">Comment</span>
					</div>
					<div className="flex items-center">
						<BookmarkIcon className="h-4 w-4" />
						<span className="ml-2">Bookmark</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function BookmarkIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
		</svg>
	);
}

function SpeakerIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
			<circle cx="12" cy="14" r="4" />
			<line x1="12" x2="12.01" y1="6" y2="6" />
		</svg>
	);
}

function ThumbsUpIcon(props: Props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
		</svg>
	);
}
