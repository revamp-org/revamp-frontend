import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
	afterAuth(auth, req, _evt) {
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url });
		}

		if (auth.sessionId && req.nextUrl.pathname === "/dashboard") {
			console.log(auth.sessionId);
		}
	},

	publicRoutes: ["/"],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
