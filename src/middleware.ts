import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
	afterAuth(auth, req, _evt) {
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url });
		}

		if (auth.sessionId && req.nextUrl.pathname === "/dashboard") {
			console.log(`sessionId: ${auth.sessionId}`);
			console.log(`userId: ${auth.userId}`);
		}
	},

	publicRoutes: ["/", "/why-revamp", "/how-it-works", "/contact", "/lets-get-started"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
