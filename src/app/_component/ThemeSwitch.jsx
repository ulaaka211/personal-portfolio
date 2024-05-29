"use client";

import { useTheme } from "../provider/ThemeProvider";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="bg-white dark:bg-[#090a0b]" onClick={toggleTheme}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
