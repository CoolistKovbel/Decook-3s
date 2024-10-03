import Image from "next/image";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="w-full p-4 flex gap-6 flex-wrap items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="w-[30%]">
          <h2 className="text-3xl font-bold">DeCook-3s: Block Stop</h2>
          <p className="text-md text-gray-400">
            Your Number 1 stop to get your cookies fresh and deloiuse.
          </p>
        </div>

        <div className="p-2 bg-[#555] flex flex-col items-center gap-4 w-[10%] rounded">
          <h3 className="text-xl font-bold">Links:</h3>
          <nav className="flex flex-col gap-5 w-full text-center ">
            <a
              href="#"
              className="uppercase bg-[#63f] font-bold drop-shadow-lg rounded hover:bg-[#111]"
            >
              Shop
            </a>
            <a
              href="#"
              className="uppercase bg-[#63f] font-bold drop-shadow-lg rounded hover:bg-[#111]"
            >
              About
            </a>
            <a
              href="#"
              className="uppercase bg-[#63f] font-bold drop-shadow-lg rounded hover:bg-[#111]"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
      <hr className="w-full" />

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );
};

export default MainFooter;
