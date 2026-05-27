import { NextResponse } from "next/server";
import {
  createAccessToken,
  isSiteAuthEnabled,
  SITE_AUTH_COOKIE,
  verifySitePassword,
} from "@/lib/site-auth";

export async function POST(request: Request) {
  if (!isSiteAuthEnabled()) {
    return NextResponse.json({ ok: true });
  }

  let password = "";
  try {
    const body = (await request.json()) as { password?: string };
    password = body.password?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!verifySitePassword(password)) {
    return NextResponse.json({ error: "Falsches Passwort." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: SITE_AUTH_COOKIE,
    value: await createAccessToken(password),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
