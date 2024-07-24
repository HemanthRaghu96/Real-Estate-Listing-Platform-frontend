import React from "react";
import { Link } from "react-router-dom";

export default function ItemsCard({ data }) {
  return (
    <section>
    <Link to={`/items/${data._id}`}>
      <div className="flex flex-col justify-center items-center border size-[250px] my-4 shadow-md cursor-pointer">
        {/* <img src={data.poster} alt={data.name} className="size-20 rounded-md object-contain" /> */}
        <p className="mx-1 px-1"><span className="font-medium">Name : </span> {data.name}</p>
        <p className="mx-1 px-1"><span className="font-medium">Age : </span> {data.age}</p>
        <p className="mx-1 px-1"><span className="font-medium">Gender : </span>{data.gender}</p>
        <p className="mt-1 px-1"><span className="font-medium">DOB : </span>{data.dob}</p>
        <p className="mx-1 px-1"><span className="font-medium">Mobile : </span>{data.mobile}</p>
      </div>
      </Link>
    </section>
  );
}
