"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainHeader = () => {
  const isLogged = false;
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header className="flex items-center flex-col w-full p-5 gap-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-bold">DeCookies-3S</h1>
        <nav className="w-[250px] p-2 drop-shadow-lg flex items-center justify-between">
          <Link href="/">home</Link>
          <Link href="/">about</Link>
          <Link href="/">Shop</Link>
        </nav>
      </div>
      {isLogged ? (
        <div className="w-full bg-[#222] p-3 flex items-center justify-between relative">
          <h2>lyub</h2>

          <button onClick={() => setToggle((prev) => !prev)}>⬇️</button>

          {toggle && (
            <div className="w-[300px] h-[300px] absolute">
              <a>Profile</a>
              <a>
                <span>ticket</span>
                <span>44</span>
              </a>
              <a>
                <span>checkout</span>
                <span>44</span>
              </a>
              <a>Logout</a>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full bg-[#111] p-3 flex items-center justify-between rounded">
          <h4 className="text-xl underline text-gray-200 capitalize">
            Join today and earn rewards.
          </h4>

          <div className="flex gap-4 items-center">
            <a
              href="/"
              className="bg-[#fA9] font-bold uppercase text-md p-2 rounded hover:bg-[#000]"
            >
              login
            </a>
            <a
              href="/"
              className="bg-[#fA9] font-bold uppercase text-md p-2 rounded hover:bg-[#000]"
            >
              register
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
