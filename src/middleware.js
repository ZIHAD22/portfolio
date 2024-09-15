import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = cookies(req).get("next-auth.session-token");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
};

export const config = {
  matcher: ["/dashboard"],
};
