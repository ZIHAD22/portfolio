import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req) => {
  const tokenName =
    process.env.NODE_ENV === "development"
      ? "next-auth.session-token"
      : "__Secure-next-auth.session-token";
  const token = cookies(req).get(tokenName);
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
