"use client";
import Footer from "../components/Footer"
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
		<div className="container mx-auto p-8">
			<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
			<form onSubmit={handleSubmit} className="max-w-md mx-auto">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded shadow appearance-none"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded shadow appearance-none"
						required
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full px-3 py-2 border rounded shadow appearance-none"
						rows={5}
						required
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
					>
						Submit
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
};

export default Contact
