"use client";

import { createContext, useEffect, useState } from "react";

type Themes = "dark" | "light";

export const THEME_KEY = "theme";
export const ThemeContext = createContext<{
  theme: Themes | null;
  toggleTheme: () => void;
}>({
  theme: null,
  toggleTheme: () => {},
});

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Themes | null>(null);

  useEffect(() => {
    setTheme((localStorage.getItem(THEME_KEY) as Themes) ?? "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* YES! I KNOW. I'M ASHAMED OF IT. BUT RIGHT NOW IT WORKS */}
      {theme && <span className={theme + "-theme hidden"} />}

      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
