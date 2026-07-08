import React, { useState } from "react";
import Navbar from "./ui/Navbar.jsx";
import Menu from "./ui/Menu.jsx";
import Cart from "./ui/Cart.jsx";

const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setCartOpen={setCartOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </>
  );
};

export default Nav;
