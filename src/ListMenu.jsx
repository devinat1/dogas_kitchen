import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function ListMenu() {
    // TODO Remove hardcoding of items
    const items = ['Mercemekli Bulgur Pilav', 'Lahmacun', 'Karniyarik', 'Mercemek Corbasi', 'Icli Kofte'];

    return (
        <div>
            <h1>List of Food</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListMenu;