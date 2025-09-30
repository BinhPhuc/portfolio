import { auth } from "@/lib/auth";
import { getCookieCache } from "better-auth/cookies";
import { headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // const session = await getCookieCache(request);
  // const pathName = request.nextUrl.pathname;

  // if (pathName.startsWith("/admin")) {
  //   if (!session) {
  //     return NextResponse.redirect(new URL("/auth/login", request.url));
  //   }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
