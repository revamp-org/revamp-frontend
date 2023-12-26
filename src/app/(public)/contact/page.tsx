"use client";
import React, { ChangeEventHandler } from 'react'
import { useState } from 'react'
const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: any) => {
		const { name, value } = e?.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<div className="h-screen-height flex items-center justify-center ">
			<div className=" flex-row justify-center items-center container mx-auto p-8">
				<h2 className="text-6xl text-primary-foreground font-semibold text-center mb-4">Contact Us</h2>
				<form onSubmit={handleSubmit} className="max-w-md mx-auto">
					<div className="mb-4">
						<label className="block text-white text-sm font-bold mb-2">Name:</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="w-full px-3 py-2 border rounded bg-[#D9D9D9] shadow appearance-none"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-white text-sm font-bold mb-2">Email:</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-3 py-2 border bg-[#D9D9D9] rounded shadow appearance-none"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block text-white text-sm font-bold mb-2">Message:</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							className="w-full px-3 py-2 border bg-[#D9D9D9] rounded shadow appearance-none"
							rows={5}
							required
						></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="w-full px-4 py-2 bg-secondary text-white rounded hover:bg-[#D0E9E9] hover:text-black focus:outline-none focus:shadow-outline-blue "
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact
