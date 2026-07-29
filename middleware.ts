import { NextRequest, NextResponse } from "next/server";

// Canonical host: 301 www.apexrestorationca.com -> apexrestorationca.com
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.slice(4);
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
