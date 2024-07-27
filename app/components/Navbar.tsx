import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/*  Right links*/}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Accueil</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
       {!user ? (
        <Link href="/login">Connexion</Link>
        ) : (
        <Link href="/orders">Commandes</Link>
        )}
       <CartIcon />
       </div>
    </div>
  );
};

export default Navbar;
