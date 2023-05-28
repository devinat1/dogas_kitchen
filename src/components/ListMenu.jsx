import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SelectedItem from "./SelectedItem";
import { foodItems } from "../foodItems";
import NotFound from "./NotFound";

function ListMenu() {
  const navigate = useNavigate();
  const { name } = useParams();

  if (name) {
    //FIXME This is technically a bit slow with O(N) search. Using a dictionary would speed things up in this case.
    const spacedName = name.replaceAll("_", " ");
    const foodItem = foodItems.find((item) => item.name === spacedName);

    if (!foodItem) {
      return <NotFound />;
    }

    return <SelectedItem {...foodItem} />;
  }

  return (
    <div className="bg-tertiary p-4 rounded-lg shadow-lg">
      <div className="text-2xl font-bold mb-4 text-primary">Menu</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((item) => (
          <div
            onClick={() => navigate(`/item/${item.name.replaceAll(" ", "_")}`)}
            key={item.id}
            className="bg-secondary p-4 rounded-lg shadow-lg flex flex-col justify-between hover:bg-primary hover:text-secondary cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="text-lg font-bold mb-2">{item.name}</div>
            <img src={item.image} alt={item.name} className="mb-2" />
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListMenu;
