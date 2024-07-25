import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { API } from "../../api/api";
import Topbar from "../global/Topbat";

const ViewSingleItem = () => {
  const [data, setData] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    fetchSelectedData();
  }, []);

  const fetchSelectedData = async () => {
    const response = await axios.get(`${API}getselectedproperty/${itemId}`);
    setData(response.data.selectedPropertys[0]);
  };

  const handleDelete = async () => {
    await axios.delete(`${API}deleteproperty/${itemId}`);
  };

  return data ? (
    <>
      <Topbar />
      <section className="ml-16 mt-16 h-screen">
        <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
          <h1 className="font-semibold text-xl">Property Details</h1>
          <div className="flex">
            <Link to={`/items/edititem/${itemId}`}>
              <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
                <MdOutlineEdit className="mr-1" />
                Edit
              </button>
            </Link>
            <Link to={"/items"}>
              <button
                className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
                onClick={handleDelete}
              >
                <MdDeleteOutline className="mr-1" />
                Delete
              </button>
            </Link>
            <Link to={"/items"}>
              <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
            </Link>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="py-1 my-1 w-[120px]">
            <h1 className="my-1 text-xs md:text-lg">Name</h1>
            <h1 className="my-1 text-xs md:text-lg">Property Type</h1>
            <h1 className="my-1 text-xs md:text-lg">Location</h1>
            <h1 className="my-1 text-xs md:text-lg">Price</h1>
            <h1 className="my-1 text-xs md:text-lg">Age</h1>

            <h1 className="my-1 text-xs md:text-lg">Status</h1>
            <h1 className="my-1 text-xs md:text-lg">Mobile</h1>
            <h1 className="my-1 text-xs md:text-lg">Description</h1>
          </div>
          <div className="py-1 my-1 w-[500px]">
            <h1 className="my-1 text-xs md:text-lg">{data.name}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.propertyType}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.location}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.price}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.age}</h1>

            <h1 className="my-1 text-xs md:text-lg">{data.Status}</h1>
            <h1 className="my-1 text-xs md:text-lg">{data.mobile}</h1>
            <h1 className="my-1 text-xs md:text-xs">{data.description}</h1>
          </div>
        </div>
      </section>
    </>
  ) : (
    "Loading..."
  );
};

export default ViewSingleItem;
