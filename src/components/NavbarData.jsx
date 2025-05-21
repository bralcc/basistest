import React from "react";
import * as IoIcons from "react-icons/io";

const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <IoIcons.IoIosHome />,
    cName: "flex justify-start items-center p-1 list-none hover:bg-gray-200",
  },
  {
    title: "Exercises",
    path: "/exercises",
    icon: <IoIcons.IoIosPaper />,
    cName: "flex justify-start items-center p-1 list-none hover:bg-gray-200",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <IoIcons.IoIosPerson />,
    cName: "flex justify-start items-center p-1 list-none hover:bg-gray-200",
  },
];

export default NavbarData;
