"use server";

export async function deleteProperty(propertyId) {
  fetch(
    `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
}
