import { NextResponse } from "next/server";
import { collections, saveToLocalStorage } from "../../route";

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { imageUrl } = body;

  const collection = collections.find((col) => col.id === parseInt(id));

  if (!collection) {
    return NextResponse.json(
      { message: "Collection not found" },
      { status: 404 }
    );
  }

  collection.images.push(imageUrl);
  saveToLocalStorage();
  return NextResponse.json(collection);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { imageUrl } = body;

  const collection = collections.find((col) => col.id === parseInt(id));

  if (!collection) {
    return NextResponse.json(
      { message: "Collection not found" },
      { status: 404 }
    );
  }

  collection.images = collection.images.filter((image) => image !== imageUrl);
  saveToLocalStorage(); 
  return NextResponse.json(collection);
}
