import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /dashboard)
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // if (
  //   !session &&
  //   path !== "/login" &&
  //   path !== "/register" &&
  //   !path.includes("/auth-flow")
  // ) {
  //   return NextResponse.redirect(new URL("/auth-flow/account-type", req.url));
  // } else if (session && path === "/") {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  if (session && path.includes("/auth-flow")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (!session && (path === "/" || path === "/dashboard")) {
    return NextResponse.redirect(new URL("/auth-flow/account-type", req.url));
  } else if (session && path === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // if (!session && (path === "/dashboard" || path === "/")) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // } else if (session && (path === "/login" || path === "/register")) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  return NextResponse.next();
}
