import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { title } = body;

  return NextResponse.json(
    { message: `Updated collection with id ${id}`, title },
    { status: 200 }
  );
}
