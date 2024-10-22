import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { NextResponse } from "next/server";

export const collections: unplashCollection[] = [
  { id: 1, title: "Halloween", images: [] },
  { id: 2, title: "Cyber Spikes", images: [] },
  { id: 3, title: "Fall Wallpapers", images: [] },
];

const generateNewId = (): number =>
  collections.length ? collections[collections.length - 1].id + 1 : 1;

export async function GET() {
  return NextResponse.json(collections);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title } = body;

  const newCollection: unplashCollection = {
    id: generateNewId(),
    title: title,
    images: [],
  };

  collections.push(newCollection);
  return NextResponse.json(newCollection, { status: 201 });
}
