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
    const foodItem = foodItems.find((item) => item.name === name);

    if (!foodItem) {
      return <NotFound />;
    }

    return <SelectedItem {...foodItem} />;
  }

  return (
    <div>
      <h1>List of Food</h1>
      <ul>
        {foodItems.map((foodItem) => (
          <li
            onClick={() => navigate(`/item/${foodItem.name}`)}
            key={foodItem.id}
          >
            {foodItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListMenu;
