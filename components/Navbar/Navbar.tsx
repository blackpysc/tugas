"use client";
import React from "react";

const Navbar = () => {
  const link = ["Coba", "Klik", "Disini"];
  return (
    <nav className="bg-sky-700 flex justify-between items-center h-20 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
      <p className="text-white ml-4 font-semibold text-2xl mr-auto">Header</p>
      <ul className="flex gap-6 list-none text-white text-xl font-semibold mr-4">
        {link.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
