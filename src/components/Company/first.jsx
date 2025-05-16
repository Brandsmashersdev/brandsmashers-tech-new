// src/components/HeroSection.jsx
import React from "react";

const first = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: 'url("/hero.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        <p className="text-xs uppercase tracking-wider">Who We Are → Board Members</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          Discover our team leading the charge
        </h1>
        <p className="mt-4 max-w-2xl text-lg">
          Board members are responsible in keeping the organization’s goals and activity in check.
        </p>
      </div>
    </div>
  );
};

export default first;
