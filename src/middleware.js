import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;

  if (token?.length > 0) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!token && request.url?.includes("dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard"],
};
