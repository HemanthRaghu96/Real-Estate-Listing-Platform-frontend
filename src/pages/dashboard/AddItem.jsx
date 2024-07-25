import axios from "axios";
import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/api";
import Topbar from "../global/Topbat";

export default function AddItem() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [mobile, setMobile] = useState("");
  const [poster, setPoster] = useState([]);

  const handleSave = async () => {
    try {
      const posterArray = Array.from(poster).map((file) => {
        return URL.createObjectURL(file); // Creates a URL for the file
      });

      const newData = {
        name,
        propertyType,
        location,
        price: Number(price),
        age: Number(age),
        description,
        Status:status,
        mobile,
        poster: posterArray,
      };
      
      console.log(newData);
      const response = await axios.post(`${API}addproperty`, newData);
      await navigate(`/items`);
      setError(false);
    } catch (error) {
      console.log("Error", error.message);
      setError(true);
    }
  };

  return (
    <>
      <Topbar />
      <section className="ml-16 mt-16 h-full overflow-y-auto">
        <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
          <h1 className="font-semibold text-xl">New Property</h1>
          <Link to={"/items"}>
            <HiMiniXMark className="mr-1 size-7 text-red-500" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-start">
          <div className="mt-5 w-[220px] md:w-[320px]">
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Name*</h1>
              <input
                type="text"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Property Type*</h1>
              <input
                type="text"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Location*</h1>
              <input
                type="text"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Price*</h1>
              <input
                type="number"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Age*</h1>
              <input
                type="number"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Description*</h1>
              <textarea
                className="border-2 rounded-md px-2 h-20 md:h-28 w-[8.5rem]"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Status*</h1>
              <input
                type="text"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Mobile*</h1>
              <input
                type="text"
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Poster</h1>
              <input
                type="file"
                multiple
                className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPoster(e.target.files)}
              />
            </div>
          </div>
        </div>
        {error ? (
          <div className="flex my-4">
            <h1 className="text-xs md:text-base text-red-500">
              Kindly fill all the mandatory (*) fields
            </h1>
          </div>
        ) : (
          ""
        )}
        <div className="flex my-4">
          <button
            className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="border rounded-lg px-2 py-1"
            onClick={() => navigate("/items")}
          >
            Cancel
          </button>
        </div>
      </section>
    </>
  );
}
