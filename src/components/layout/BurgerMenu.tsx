"use client";

import type { FC } from "react";
import { NAV_ITEMS } from "@/components/layout/Header";
import { CloseIcon } from "@/components/icons/CloseIcon";

interface BurgerMenuProps {
  onClose: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ onClose }) => {
  const scrollTo = (id: string) => {
    onClose();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-screen bg-carbon-900 absolute top-0 left-0 z-[60] px-2">
      <div className="absolute top-0 right-0 z-[80] flex justify-end w-full px-4 py-4">
        <button onClick={onClose} aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>

      <ul className="flex flex-col items-center justify-center gap-10 w-full h-full font-mono text-xl">
        {NAV_ITEMS.map((item) => (
          <li
            key={item}
            onClick={() => scrollTo(item)}
            className="cursor-pointer text-slate-300 hover:text-[#00d4ff] transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
