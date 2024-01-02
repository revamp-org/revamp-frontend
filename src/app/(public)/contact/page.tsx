"use client";
import Link from "next/link";
import React, { ChangeEventHandler } from "react";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { tr } from "date-fns/locale";
const Contact = () => {
	const { register, handleSubmit } = useForm();
	// const handleChange = (e: any) => {
	// 	const { name, value } = e?.target;
	// 	setFormData({ ...formData, [name]: value });
	// };

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	console.log("Form submitted:", formData);
	// };

	return (
		<div className="h-screen-height ">
			<div className=" flex items-center justify-center py-3 text-center  lg:py-4">
				<Link href="/">
					<Image src="/assets/logo3-dark.svg" width={120} height={60} alt="Revamp Logo" />
				</Link>
			</div>
			<div className=" container mx-auto flex-col items-center justify-center p-8">
				<h2 className="mb-4 text-center text-6xl font-semibold text-primary-foreground">
					Contact Us
				</h2>
				<form
					className="mx-auto max-w-md"
					onSubmit={handleSubmit((data) => {
						console.log(data);
					})}
				>
					<div className="mb-4">
						<label htmlFor="name" className="mb-2 block text-sm font-bold text-white">
							Name:
						</label>
						<input
							{...register("yourName", { required: true })}
							placeholder="Name"
							className="w-full appearance-none rounded border bg-[#D9D9D9] px-3 py-2 shadow"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="mb-2 block text-sm font-bold text-white">
							Email:
						</label>
						<input
							{...register("email", { required: true })}
							placeholder="Email"
							className="w-full appearance-none rounded border bg-[#D9D9D9] px-3 py-2 shadow"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="message" className="mb-2 block text-sm font-bold text-white">
							Message:
						</label>
						<textarea
							{...register("message", { required: true })}
							placeholder="Message for us"
							className="w-full appearance-none rounded border bg-[#D9D9D9] px-3 py-2 shadow"
							rows={5}
						></textarea>
					</div>
					<div>
						<input
							type="Submit"
							className="btn w-full bg-accent hover:bg-blue-300 hover:text-black "
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
