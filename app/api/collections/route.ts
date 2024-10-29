import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET request received" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json(
    { message: "POST request received", data: body },
    { status: 201 }
  );
}
