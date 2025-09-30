import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await auth.api.signOut({
    headers: headers(),
  });
  return NextResponse.redirect(new URL("/", request.url));
}
