import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "src/hooks/useLocalStorage";

const ThemeContext = createContext<any>(null);

// Get light or dark theme based on the local storage or the CSS media feature - prefers-color-scheme
const getInitalTheme: () => string = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    if (typeof theme === "string") {
      return theme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useLocalStorage("theme", getInitalTheme);

  const rawSetTheme: (theme: string) => void = (rawTheme: string) => {
    // Get the root element from the document
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    // Toggle the classlist of the root
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    setTheme(rawTheme);
  };

  if (initialTheme) rawSetTheme(initialTheme);

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
