"use client";

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-sky-700 text-white h-20">
      <div className="flex justify-between p-4">
        <p className="text-sm">
          Copyright © {currentYear}, Tugas Sanbercode NextJS Batch 54{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
