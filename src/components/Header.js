import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

export default function Header({handleDarkMode, isDarkMode}) {

  const navigate = useNavigate();
const handleBackToShop = () => {
  navigate("/shop");
}
  return (
    <>
        <h1 onClick={handleBackToShop}>WindowShopper</h1>
        <button onClick={handleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
        <NavLink to="/shop"><button>Shop</button></NavLink>
        <NavLink to='/addItem'><button>List An Item</button></NavLink>
        <NavLink to="/likes"><button>Likes/Dislikes</button></NavLink>
        <NavLink to="/cart"><button>Cart</button></NavLink>
    </>
  )
}