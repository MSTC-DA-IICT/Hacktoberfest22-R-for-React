import React from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    url: "/",
    name: "home",
  },
  {
    url: "/contact",
    name: "contact",
  },
  {
    url: "/about",
    name: "about",
  },
  {
    url: "/product",
    name: "product",
  },
  {
    url: "/profile",
    name: "profile",
  },
  {
    url: "/login",
    name: "login",
  },
];

function Navbar() {
  return (
    <>
      <nav className="pt-10 pb-10 pl-5 pr-5 flex justify-between items-center">
        <h1 className="text-[3.2rem] font-bold tracking-widest">LOGO</h1>
        <ul className="capitalize flex gap-x-20 relative text-center pr-20">
          {Links.map((link, index) => {
            return (
              <li
                key={index}
                className=" before:border-red-400 before:border before:absolute before:top-[100%] before:w-0 transition-all before:content-none duration-200 hover:before:w-[5%] hover:before:content-['']"
              >
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
