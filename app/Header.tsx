"use client";
import React, { useEffect, useState } from "react";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import { useTheme } from "next-themes";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars3Icon className="w-8 h-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">The Flash New</h1>
        </Link>
        <div className="flex space-x-2 justify-end items-center">
          {currentTheme === "dark" ? (
            <SunIcon
              className="w-8 h-8 cursor-pointer text-yellow-500"
              onClick={() => setTheme("light")}
            />
          ) : (
            <MoonIcon
              className="w-8 h-8 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
          <button className="hidden md:inline bg-black text-white px-4 lg:px-8 py-2 lg:py-4 cursor-pointer rounded-full ">
            Subscribe Now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
};

export default Header;
