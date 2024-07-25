// src/components/Filter.js
import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(""); // Status filter

  const handleFilter = () => {
    onFilter({
      name,
      propertyType,
      location,
      price: price ? Number(price) : "",
      status,
    });
  };

  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold mb-4">Filter Properties</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Property Type</label>
        <input
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-md p-2 w-full"
        >
          <option value="">All</option>
          <option value="sold">Sold</option>
          <option value="not sold">Not Sold</option>
        </select>
      </div>
      <button
        onClick={handleFilter}
        className="bg-buttonColor text-white px-4 py-2 rounded-md"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
