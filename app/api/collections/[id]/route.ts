import { NextResponse } from "next/server";
import { collections } from "../route";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { title } = body;

  const collection = collections.find((col) => col.id === parseInt(id));

  if (!collection) {
    return NextResponse.json(
      { message: "Collection not found" },
      { status: 404 }
    );
  }

  collection.title = title;
  return NextResponse.json(collection);
}
