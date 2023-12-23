const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white text-center py-4">
			<p className="text-sm">
				© {new Date().getFullYear()} Revamp. All rights reserved.
			</p>
			<p className="text-sm">Contact us at: revamp@revampgoals.com</p>
		</footer>
	);
};
export default Footer;
