const Footer = () => {
	return (
		<footer className="bg-topbar bottom-0 text-white h-footer-height text-center pt-3">
			<p className="text-m pb-2 font-sans">
				© {new Date().getFullYear()} Revamp. All rights reserved.
			</p>
			<p className="text-lg font-sans">Contact us at: revamp@revampgoals.com</p>
		</footer>
	);
};
export default Footer;
