import { unplashCollection } from "@/app/utils/interfaces/unplashCollection";
import { NextResponse } from "next/server";

export const saveToLocalStorage = () => {
  localStorage.setItem("collections", JSON.stringify(collections));
};

const loadFromLocalStorage = (): unplashCollection[] => {
  const data = localStorage.getItem("collections");
  return data ? JSON.parse(data) : [];
};

export const collections: unplashCollection[] = loadFromLocalStorage().length
  ? loadFromLocalStorage()
  : [
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
    title,
    images: [],
  };

  collections.push(newCollection);
  saveToLocalStorage();
  return NextResponse.json(newCollection, { status: 201 });
}
