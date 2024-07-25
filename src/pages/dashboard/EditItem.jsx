import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../api/api";
import axios from "axios";
import Topbar from "../global/Topbat";

const EditItem = () => {
  const { itemId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSelectedData();
  }, []);

  const fetchSelectedData = async () => {
    const response = await axios.get(`${API}getselectedproperty/${itemId}`);
    setData(response.data.selectedPropertys[0]);
  };

  return data ? <EditItems data={data} itemId={itemId} /> : "Loading...";
}

export default EditItem;

function EditItems({ data, itemId }) {
  const navigate = useNavigate();
  const [name, setName] = useState(data.name || "");
  const [propertyType, setPropertyType] = useState(data.propertyType || "");
  const [location, setLocation] = useState(data.location || "");
  const [price, setPrice] = useState(data.price || "");
  const [age, setAge] = useState(data.age || "");
  const [description, setDescription] = useState(data.description || "");
  const [status, setStatus] = useState(data.Status || "");
  const [mobile, setMobile] = useState(data.mobile || "");
  const [poster, setPoster] = useState(data.poster || []);

  const handleSave = async () => {
    const editedData = {
      name,
      propertyType,
      location,
      price: Number(price),
      age: Number(age),
      description,
      Status:status,
      mobile,
      poster
    };

    try {
      const response = await axios.put(`${API}editproperty/${itemId}`, editedData);
      navigate(`/items/${itemId}`);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  return (
    <>
      <Topbar />
      <section className="ml-16 mt-16 h-full overflow-y-auto">
        <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
          <h1 className="font-semibold text-xl">{name}</h1>
          <Link to={"/items"}>
            <HiMiniXMark className="mr-1 size-7 text-red-500" />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-start">
          <div className="mt-5 w-[220px] md:w-[320px]">
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Name*</h1>
              <input
                type="text"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Property Type*</h1>
              <input
                type="text"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPropertyType(e.target.value)}
                value={propertyType}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Location*</h1>
              <input
                type="text"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Price*</h1>
              <input
                type="number"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Age*</h1>
              <input
                type="number"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Description*</h1>
              <textarea
                className="text-xs md:text-base border-2 rounded-md px-2 h-20 md:h-28 w-[8.5rem]"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Status*</h1>
              <input
                type="text"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Mobile*</h1>
              <input
                type="text"
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
            </div>
            <div className="flex justify-between my-4">
              <h1 className="text-xs md:text-base">Poster</h1>
              <input
                type="text"
                value={poster}
                className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
                onChange={(e) => setPoster(e.target.files)}
             
              />
            </div>
          </div>
        </div>
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
