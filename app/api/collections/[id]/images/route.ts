import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { imageUrl } = body;

  return NextResponse.json(
    { message: `Image ${imageUrl} added to collection with id ${id}` },
    { status: 201 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { imageUrl } = body;

  return NextResponse.json(
    { message: `Image ${imageUrl} removed from collection with id ${id}` },
    { status: 200 }
  );
}
