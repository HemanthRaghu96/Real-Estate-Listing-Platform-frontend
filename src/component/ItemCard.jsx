import React from "react";
import { Link } from "react-router-dom";

export default function ItemsCard({ data }) {
  return (
    <section>
      <Link to={`/items/${data._id}`}>
        <div className="flex flex-col justify-center items-center border w-[450px] h-[250px] my-4 shadow-md cursor-pointer rounded-lg">
          <div className="flex justify-center items-center">
            <p className="mx-1 px-1">
              <span className="font-medium"></span> {data.name}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="mx-1 px-1">
              <span className="font-medium">Type : </span> {data.propertyType}
            </p>
            <p className="mx-1 px-1">
              <span className="font-medium">Age : </span> {data.age}years
            </p>
            <p className="mx-1 px-1">
              <span className="font-medium">₹</span>
              {data.price}
            </p>
          </div>
          <div className="flex  justify-center items-center">
            <img
              src={data.poster[0]}
              alt={data.name}
              className="size-[150px] rounded-md object-contain"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="mt-1 px-1">
                <span className="font-medium">Status : </span>
                {data.Status}
              </p>
              <p className="mx-1 px-1">
                <span className="font-medium">location : </span> {data.location}
              </p>
              {/* <p className="mt-1 px-1"><span className="font-medium">Description : </span>{data.description}</p> */}
              <p className="mx-1 px-1">
                <span className="font-medium">Mobile : </span>
                {data.mobile}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
