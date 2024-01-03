const Footer = () => {
	return (
		<footer className="h-footer-height bottom-0  bg-topbar pt-3 text-center text-white">
			<p className="text-m pb-2 font-sans">
				© {new Date().getFullYear()} Revamp. All rights reserved.
			</p>
			<p className="font-sans text-lg">Contact us at: revamp@revampgoals.com</p>
		</footer>
	);
};
export default Footer;
