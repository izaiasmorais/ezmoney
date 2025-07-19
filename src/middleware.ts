import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get("ezmoney-access-token")?.value;
	const { pathname } = request.nextUrl;
	const url = request.nextUrl.clone();

	const isUserAuthenticated = !!accessToken;
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
	matcher: [
		"/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.webp$|.*\\.ico$).*)",
	],
};
