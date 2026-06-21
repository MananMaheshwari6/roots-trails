"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "roots-trails-theme";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Provides light/dark theme state and persists preference to localStorage.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - App content wrapped by the provider.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Access the current theme and toggle function.
 *
 * @returns {{ theme: "light" | "dark", toggleTheme: () => void }}
 */
export function useTheme() {
  return useContext(ThemeContext);
}
