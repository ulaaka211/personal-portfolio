"use client";

import { useState } from "react";
import { Bars } from "../assets/Bars";
import { useScroll } from "../hooks/UseScroll";
import { BurgerMenu } from "../_component/BurgerMenu";
import { ThemeSwitch } from "./ThemeSwitch";

export const navbar = ["Home", "About", "Works", "Contact"];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(0);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header
      className={
        scrolled
          ? "h-full w-full flex items-center justify-between py-2 md:py-4 md:px-10 pl-4 pr-2 bg-[#ffffffd9] dark:bg-[#090a0bd9] sticky top-0 left-0 z-10 shadow-md"
          : "h-full w-full flex items-center justify-between py-2 md:py-4 md:px-10 pl-4 pr-2 bg-white dark:bg-[#090a0b] relative top-0 left-0 z-10"
      }
    >
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => {
          document.getElementById("Home").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <h1 className="md:text-[30px] text-[26px] md:font-[700] font-[600] flex justify-center items-center text-black dark:text-white">
          &#60; S &#47;&#62;
        </h1>
      </div>
      <div className="hidden md:flex items-center justify-center gap-[24px]">
        <ul className="flex items-center justify-center gap-[24px] text-[16px] font-bold text-black dark:text-white">
          {navbar.map((item, index) => (
            <li
              onClick={() => {
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
        <ThemeSwitch />
        <button className="btn btn-ghost border border-black dark:border-white">
          <a
            download
            href="/ulaaka cv.pdf"
            className="text-[16px] font-bold text-black dark:text-white"
          >
            Downlaod CV
          </a>
        </button>
      </div>
      <div className="flex md:hidden p-[6px] items-center gap-2">
        <button className="flex md:hidden btn btn-ghost border border-black dark:border-white dark:text-white min-h-6 h-full">
          <a
            download
            href="/ulaaka cv.pdf"
            className="text-[12px] font-bold text-black dark:text-white"
          >
            Downlaod CV
          </a>
        </button>
        <div onClick={toggle}>
          <Bars />
        </div>
      </div>
      {open && <BurgerMenu setOpen={setOpen} toggle={toggle} />}
    </header>
  );
};
