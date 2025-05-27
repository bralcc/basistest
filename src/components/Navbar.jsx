import NavbarData from "../data/NavbarData";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import React, { useState } from "react";

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);

  // // Check if the user has a preference for dark mode
  // React.useEffect(() => {
  //   const userPrefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   if (userPrefersDark) {
  //     setDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  // // Toggle dark mode
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  // // Handle click event
  // const handleClick = () => {
  //   toggleDarkMode();
  // };

  // // Icon based on dark mode state
  // const icon = darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />;

  // Navbar component
  return (
    <div className="relative flex w-full bg-primary text-text">
      <nav className="w-full flex justify-between items-center p-4">
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
      {/* <div className="absolute top-1 right-1 p-4">
        <button onClick={handleClick}>{icon}</button>
      </div> */}
    </div>
  );
}
