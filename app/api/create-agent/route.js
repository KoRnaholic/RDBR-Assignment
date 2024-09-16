// import { NextResponse } from "next/server";

// export async function POST(request) {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   const surname = formData.get("surname");
//   const email = formData.get("email");
//   const phone = formData.get("phone");
//   const avatar = formData.get("image");

//   console.log(process.env.NEXT_PUBLIC_API_TOKEN);

//   const agentData = new FormData();
//   formData.append("name", name);
//   formData.append("surname", surname);
//   formData.append("email", email);
//   formData.append("phone", phone);
//   formData.append("avatar", avatar);

//   try {
//     const res = await fetch(
//       "https://api.real-estate-manager.redberryinternship.ge/api/agents",
//       {
//         method: "POST",
//         body: agentData, // Send as JSON
//         headers: {
//           // "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//         },
//       }
//     );

//     const data = await res.json();

//     console.log("data", data, process.env.NEXT_PUBLIC_API_TOKEN);

//     return NextResponse.json({ res }, { status: 200 });
//   } catch (err) {
//     console.error("Request Error:", err.message);
//     return NextResponse.json({ message: err.message }, { status: 500 });
//   }
// }
