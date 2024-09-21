"use client";
import ChooseAgent from "@/components/add-agent/ChooseAgent";
import DealType from "@/components/property-form/DealType";
import PropertyButtons from "@/components/property-form/PropertyButtons";
import PropertyDetails from "@/components/property-form/PropertyDetails";
import PropertyImageUpload from "@/components/property-form/PropertyImageUpload";
import PropertyLocation from "@/components/property-form/PropertyLocation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProperty() {
  const [inputAdressValue, setInputAdressValue] = useState(
    sessionStorage.getItem("inputAdressValue") || ""
  );
  const [inputIndexValue, setInputIndexValue] = useState(
    sessionStorage.getItem("inputIndexValue") || ""
  );
  const [inputRegionValue, setInputRegionValue] = useState(
    sessionStorage.getItem("inputRegionValue") || ""
  );
  const [inputCityValue, setInputCityValue] = useState(
    sessionStorage.getItem("inputCityValue") || ""
  );
  const [selectedAgent, setSelectedAgent] = useState(
    sessionStorage.getItem("selectedAgent") || ""
  );

  const [formValues, setFormValues] = useState({
    price: sessionStorage.getItem("price") || "",
    bedrooms: sessionStorage.getItem("bedrooms") || "",
    area: sessionStorage.getItem("area") || "",
    description: sessionStorage.getItem("description") || "",
  });

  const router = useRouter();
  const [saleOrRent, setSaleOrRent] = useState(
    sessionStorage.getItem("saleOrRent") || null
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(
    sessionStorage.getItem("selectedImage") || null
  );

  const [agents, setAgents] = useState(null);
  const disabled = selectedImage === null ? false : true;
  const [regions, setRegions] = useState(null);
  const [cities, setCities] = useState(null);

  const regionId = regions?.find(
    (region) => region.name === inputRegionValue
  )?.id;
  const cityId = cities?.find((city) => city.name === inputCityValue)?.id;
  const filteredAgent = agents?.find(
    (agent) => agent.name + agent.surname === selectedAgent
  );
  const agentId = filteredAgent?.id;

  // Convert image to base64 and save to session storage
  const convertImageToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      sessionStorage.setItem("selectedImage", base64String);
      setPreviewImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    convertImageToBase64(file);
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(null);
    setPreviewImage(null);
    sessionStorage.removeItem("selectedImage");
  };

  // Save form data to sessionStorage on changes
  useEffect(() => {
    sessionStorage.setItem("inputAdressValue", inputAdressValue);
    sessionStorage.setItem("inputIndexValue", inputIndexValue);
    sessionStorage.setItem("inputRegionValue", inputRegionValue);
    sessionStorage.setItem("inputCityValue", inputCityValue);
    sessionStorage.setItem("selectedAgent", selectedAgent);
    sessionStorage.setItem("price", formValues.price);
    sessionStorage.setItem("bedrooms", formValues.bedrooms);
    sessionStorage.setItem("area", formValues.area);
    sessionStorage.setItem("description", formValues.description);
    sessionStorage.setItem("saleOrRent", saleOrRent);
  }, [
    inputAdressValue,
    inputIndexValue,
    inputRegionValue,
    inputCityValue,
    selectedAgent,
    formValues,
    saleOrRent,
  ]);

  useEffect(() => {
    fetch("https://api.real-estate-manager.redberryinternship.ge/api/regions")
      .then((res) => res.json())
      .then((data) => {
        setRegions(data);
      });
    fetch("https://api.real-estate-manager.redberryinternship.ge/api/cities")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  }, []);

  const handleAdressChange = (e) => setInputAdressValue(e.target.value);
  const handleIndexChange = (e) => setInputIndexValue(e.target.value);
  const handleRegionChange = (e) => setInputRegionValue(e.target.value);
  const handleCityChange = (e) => setInputCityValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("region_id", regionId);
    formData.append("price", formValues.price);
    formData.append("zip_code", inputIndexValue);
    formData.append("area", formValues.area);
    formData.append("city_id", cityId);
    formData.append("address", inputAdressValue);
    formData.append("agent_id", agentId);
    formData.append("bedrooms", formValues.bedrooms);
    formData.append("is_rental", saleOrRent);
    formData.append("image", selectedImage);
    formData.append("description", formValues.description);

    try {
      const response = await fetch(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        router.push("/");
        handleClear();
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const handleClear = () => {
    setInputAdressValue("");
    setInputIndexValue("");
    setInputRegionValue("");
    setInputCityValue("");
    setSelectedAgent("");
    setFormValues({
      price: "",
      bedrooms: "",
      area: "",
      description: "",
    });
    setSaleOrRent(null);
    setPreviewImage(null);
    setCities(null);
    sessionStorage.clear(); // Clear sessionStorage when clearing the form
  };

  return (
    <section className="pb-10">
      <h2 className="text-[#021526] text-[32px] text-center mt-[62px]">
        ლისტინგის დამატება
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-10 gap-10 max-w-[788px] mx-auto"
      >
        <DealType saleOrRent={saleOrRent} setSaleOrRent={setSaleOrRent} />
        <PropertyLocation
          inputAdressValue={inputAdressValue}
          inputIndexValue={inputIndexValue}
          inputRegionValue={inputRegionValue}
          inputCityValue={inputCityValue}
          handleAdressChange={handleAdressChange}
          handleIndexChange={handleIndexChange}
          handleRegionChange={handleRegionChange}
          handleCityChange={handleCityChange}
          data={regions}
        />
        <PropertyDetails
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <PropertyImageUpload
          previewImage={previewImage}
          handleRemoveImage={handleRemoveImage}
          handleFileChange={handleFileChange}
          disabled={disabled}
          selectedImage={selectedImage}
        />
        <ChooseAgent
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          agents={agents}
          setAgents={setAgents}
        />
        <PropertyButtons handleClear={handleClear} />
      </form>
    </section>
  );
}
