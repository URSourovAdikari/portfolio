import { NextResponse } from "next/server";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "https://api.sourovadikari.xyz").replace(/\/$/, "");

export async function POST(request: Request) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: await request.text(),
  });

  const payload = await response.json().catch(() => ({ message: "Unable to process contact request." }));
  return NextResponse.json(payload, { status: response.status });
}