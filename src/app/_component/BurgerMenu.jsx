"use client";

import { navbar } from "./Header";
import { Cancel } from "../assets/Cancel";
import { ThemeSwitch } from "./ThemeSwitch";

export const BurgerMenu = ({ setOpen, toggle }) => {
  return (
    <div className="h-screen w-screen bg-white dark:bg-[#090a0b] absolute top-0 left-0 z-60 px-2">
      <div className="absolute top-0 left-0 z-80 flex justify-between gap-[16px] text-black w-full px-[16px] py-[16px]">
        <ThemeSwitch />
        <div onClick={toggle}>
          <Cancel />
        </div>
      </div>

      <ul className="flex flex-col items-center justify-center gap-12 text-black dark:text-white w-full h-full text-2xl font-bold">
        {navbar.map((item, index) => (
          <li
            onClick={() => {
              setOpen(false);
              document.getElementById(`${item}`).scrollIntoView({
                behavior: "smooth",
              });
            }}
            key={index}
            className="cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
