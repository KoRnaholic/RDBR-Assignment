"use client";
import ChooseAgent from "@/components/add-agent/ChooseAgent";
import DealType from "@/components/property-form/DealType";
import PropertyButtons from "@/components/property-form/PropertyButtons";
import PropertyDetails from "@/components/property-form/PropertyDetails";
import PropertyImageUpload from "@/components/property-form/PropertyImageUpload";
import PropertyLocation from "@/components/property-form/PropertyLocation";
import { useEffect, useState } from "react";

export default function AddProperty() {
  const [inputAdressValue, setInputAdressValue] = useState("");
  const [inputIndexValue, setInputIndexValue] = useState("");
  const [inputRegionValue, setInputRegionValue] = useState("");
  const [inputCityValue, setInputCityValue] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const [agents, setAgents] = useState(null);

  const disabled = selectedImage === null ? false : true;
  const [data, setData] = useState(null);

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

  useEffect(() => {
    fetch("https://api.real-estate-manager.redberryinternship.ge/api/regions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // setLoading(false)
      });
  }, []);

  const handleAdressChange = (e) => setInputAdressValue(e.target.value);
  const handleIndexChange = (e) => setInputIndexValue(e.target.value);
  const handleRegionChange = (e) => setInputRegionValue(e.target.value);
  const handleCityChange = (e) => setInputCityValue(e.target.value);

  return (
    <section className="pb-10">
      <h2 className="text-[#021526] text-[32px] text-center mt-[62px]">
        ლისტინგის დამატება
      </h2>
      <form className="mt-10  gap-10 max-w-[788px] mx-auto">
        <DealType />
        <PropertyLocation
          inputAdressValue={inputAdressValue}
          inputIndexValue={inputIndexValue}
          inputRegionValue={inputRegionValue}
          inputCityValue={inputCityValue}
          handleAdressChange={handleAdressChange}
          handleIndexChange={handleIndexChange}
          handleRegionChange={handleRegionChange}
          handleCityChange={handleCityChange}
          data={data}
        />
        <PropertyDetails />
        <PropertyImageUpload
          previewImage={previewImage}
          handleRemoveImage={handleRemoveImage}
          handleFileChange={handleFileChange}
          disabled={disabled}
        />
        <ChooseAgent agents={agents} setAgents={setAgents} />
        <PropertyButtons />
      </form>
    </section>
  );
}
