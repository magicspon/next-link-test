import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware() {
	console.log("[run middleware]");

	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/restricted/:path*",
};
