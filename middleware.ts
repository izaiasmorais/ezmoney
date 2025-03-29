import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function middleware(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);

	const { pathname } = request.nextUrl;

	// Redirect authenticated users away from login/cadastro pages
	if (sessionCookie && ["/entrar", "/cadastro"].includes(pathname)) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// Redirect unauthenticated users trying to access protected routes
	if (!sessionCookie && pathname.startsWith("/")) {
		return NextResponse.redirect(new URL("/entrar", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/", "/entrar", "/cadastro"], // Apply middleware to these routes
};
