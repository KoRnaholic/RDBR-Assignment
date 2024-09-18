import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/cities",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const cities = await res.json();

    return NextResponse.json({ cities }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
