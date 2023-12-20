"use client";

import { createContext, useState } from "react";

type Themes = "dark" | "light";

export const THEME_KEY = "theme";
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Themes>(
    (localStorage.getItem(THEME_KEY) as Themes) ?? "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* YES! I KNOW. I'M ASHAMED OF IT. BUT RIGHT NOW IT WORKS */}
      <span className={theme + "-theme hidden"} />

      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
