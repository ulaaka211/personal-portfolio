"use client";

import { navbar } from "./Header";
import { Cancel } from "../assets/Cancel";

export const BurgerMenu = ({ setOpen, toggle }) => {
  return (
    <div className="h-screen w-screen bg-carbon-900 absolute top-0 left-0 z-60 px-2">
      <div className="absolute top-0 right-0 z-80 flex justify-end gap-4 w-full px-4 py-4">
        <div onClick={toggle} className="text-slate-400 cursor-pointer">
          <Cancel />
        </div>
      </div>

      <ul className="flex flex-col items-center justify-center gap-10 w-full h-full font-mono text-xl">
        {navbar.map((item, index) => (
          <li
            onClick={() => {
              setOpen(false);
              document.getElementById(`${item}`).scrollIntoView({ behavior: "smooth" });
            }}
            key={index}
            className="cursor-pointer text-slate-300 hover:text-[#00d4ff] transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
