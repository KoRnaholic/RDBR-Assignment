import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const avatar = formData.get("image");

  const agentData = {
    name,
    surname,
    email,
    phone,
  };

  console.log(agentData);
  try {
    await fetch(
      "https://api.real-estate-manager.redberryinternship.ge/api/agents",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: agentData, // Send data as JSON
      }
    );

    return NextResponse.json({ agents }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
