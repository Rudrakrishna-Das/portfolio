"use client";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" fixed md:flex md:justify-between p-4 bg-black text-white  w-full">
      <h1>Rudra</h1>
      <div onClick={() => setOpen((prevState) => !prevState)}>
        {!open ? (
          <Bars3Icon className="z-[6] h-6 inline md:hidden absolute top-4 right-4" />
        ) : (
          <XMarkIcon className="z-[6] h-6 inline md:hidden absolute top-4 right-4" />
        )}
      </div>
      <ul
        className={`z-[2] md:z-[4] text-center space-y-6 md:space-y-0  md:flex md:justify-end md:space-x-8 absolute md:static w-full bg-black  transition-all duration-500 ease-in ${
          open ? "top-[-6px] left-0 my-6 py-4 pt-14" : "top-[-200px] left-0"
        } `}
      >
        <li className="hover:text-gray-400 transition-all duration-500">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-gray-400 transition-all duration-500">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-gray-400 transition-all duration-500">
          <Link href="#project">Project</Link>
        </li>
        <li className="hover:text-gray-400 transition-all duration-500">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
