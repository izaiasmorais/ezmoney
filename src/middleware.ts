import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
	const { pathname } = request.nextUrl;
	const url = request.nextUrl.clone();

	const isUserAuthenticated = !!sessionCookie;

	const publicRoutes = ["/entrar", "/cadastro"];

	if (!isUserAuthenticated) {
		url.pathname = "/entrar";

		if (!publicRoutes.includes(pathname)) {
			return NextResponse.redirect(url);
		}
	}

	if (
		isUserAuthenticated &&
		(pathname === "/entrar" || pathname === "/cadastro")
	) {
		url.pathname = "/";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
