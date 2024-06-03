"use client";

import { useTheme } from "../provider/ThemeProvider";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="bg-transparent" onClick={toggleTheme}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
