"use client";

import { useTheme } from "next-themes";
import { Button } from "./Button/Button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <Button label={theme === "dark" ? "light mode" : "dark mode"} onClick={toggleTheme} />;
}
