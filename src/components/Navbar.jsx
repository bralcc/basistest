import React from "react";
import NavbarData from "../components/NavbarData";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-gray-800 text-white p-4">
      <ul>
        {NavbarData.map((item, index) => {
          return (
            <li key={item.id || index} className={item.cName}>
              <a href={item.path}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
