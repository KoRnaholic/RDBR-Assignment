"use client";

import { useState } from "react";

export default function Page() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Select image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("region_id", "1");
    formData.append("price", "100000");
    formData.append("zip_code", "0101");
    formData.append("area", "100.5");
    formData.append("city_id", "1");
    formData.append("address", "შარტავას 2ა");
    formData.append("agent_id", "300");
    formData.append("bedrooms", "3");
    formData.append("is_rental", "0");
    formData.append("image", image); // Add the selected image file
    formData.append("description", "სახლი ლიანდაგთან");

    try {
      const response = await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Bearer token for authorization
            // 'Content-Type': 'multipart/form-data' - Don't set this manually, let the browser handle it
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
