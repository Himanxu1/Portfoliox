'use client';
import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Link onClick={() => setTheme(theme === "dark" ? "light" : "dark")} href="#">
      <Button variant="ghost" size="icon" className="dark:hover:bg-[#101827]">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Link>
  );
}
