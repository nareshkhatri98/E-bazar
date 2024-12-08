
import { NextResponse } from "next/server";


export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;

  if (token?.length > 0) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!token && request.url?.includes("dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}


export const config = {
  matcher: ["/login", "/register", "/dashboard"],
};
