"use client";
import "./../globals.css";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleNavigationClick = () => {
    setIsMenuOpen(false); // Close the navigation list when a navigation item is clicked
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header>
      <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-gray-200 border-[--ui-light-border-color]  dark:border-[--ui-dark-border-color] backdrop-blur-2xl">
        <div className="sm:px-8 pt-8 px-10 w-full fixed inset-x-0 top-0 ">
          <div className="relative flex gap-4 mx-auto   lg:max-w-5xl    px-4 sm:px-8   w-full max-w-7xl lg:px-8     ">
            <div className="flex flex-1"></div>
            <div className="flex flex-1 justify-end md:justify-center relative">
              {/* Menu button for small screens */}
              <div className="md:hidden relative">
                <button
                  className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 hover:text-cyan-500 shadow-lg shadow-slate-800/40 ring-1 ring-slate-900/5  backdrop-blur dark:bg-slate-800/90 dark:text-cyan-200 dark:hover:text-cyan-400 dark:ring-white/10 dark:hover:ring-white/20 dark:shadow-white/20"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {/* Change button text based on menu state */}
                  {isMenuOpen ? "Close" : "Menu"}
                  {/* Change button text and icon based on menu state */}
                  {isMenuOpen ? (
                    <svg
                      viewBox="0 0 20 12"
                      aria-hidden="true"
                      className={`ml-3 h-auto w-4 stroke-slate-600 dark:stroke-cyan-200 group-hover:stroke-cyan-500 dark:group-hover:stroke-cyan-400`}
                    >
                      <path
                        d="M1.5 1.5 10.5 10.5 M10.5 1.5 1.5 10.5"
                        fill="none"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 8 6"
                      aria-hidden="true"
                      className={`ml-3 h-auto w-2 stroke-slate-600 dark:stroke-cyan-200 group-hover:stroke-cyan-500 dark:group-hover:stroke-cyan-400 ${
                        isMenuOpen ? "transform rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M1.75 1.75 4 4.25l2.25-2.5"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                {/* Navigation links */}
                {isMenuOpen && (
                  <ul
                    className="absolute left-0 w-full bg-white/90 mt-2 py-2 text-sm font-medium text-slate-800 shadow-lg 
                      ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10 shadow-slate-800/40 dark:shadow-white/20"
                  >
                    <li className="">
                      <Link
                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/"
                        onClick={handleNavigationClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/articles"
                        onClick={handleNavigationClick}
                      >
                        Articles
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/news"
                        onClick={handleNavigationClick}
                      >
                        News
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/speaking"
                        onClick={handleNavigationClick}
                      >
                        Speaking
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                        href="/uses"
                        onClick={handleNavigationClick}
                      >
                        Uses
                      </Link>
                    </li> */}
                  </ul>
                )}
              </div>

              {/* Navigation links for larger screens */}
              <div className="hidden md:inline-block">
                <ul
                  className="flex rounded-full bg-white/90 px-3  text-sm font-medium text-slate-800 shadow-lg 
                    ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-800/90 dark:text-slate-200 dark:ring-white/10 shadow-slate-800/40 dark:shadow-white/20"
                >
                  <li className="">
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/news"
                    >
                      News
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/speaking"
                    >
                      Speaking
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                      href="/uses"
                    >
                      Uses
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
           
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto inline-block">
                <button
                  onClick={() =>
                    theme == "light" ? setTheme("dark") : setTheme("light")
                  }
                  type="button"
                  aria-label="Switch to light theme"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-slate-800/40 ring-1 ring-slate-900/5 backdrop-blur transition
                     dark:bg-slate-800/90 dark:ring-white/10 hover:ring-white/20  dark:shadow-white/20"
                >
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6 fill-slate-100 stroke-slate-500 transition group-hover:fill-teal-200 group-hover:stroke-teal-400 dark:hidden
                      dark:group-hover:stroke-teal-500"
                  >
                    <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                    <path
                      d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                      fill="none"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="hidden h-6 w-6 fill-slate-700 stroke-slate-500 group-hover:fill-teal-200 dark:stroke-teal-200 transition dark:block
                        dark:group-hover:stroke-teal-400 "
                  >
                    <path
                      d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The current theme is {theme}
      <button onClick={() => setTheme("light")}>LightMode</button>
      <button
        onClick={() =>
          theme == "light" ? setTheme("dark") : setTheme("light")
        }
      >
        DarkMode
      </button> */}
      </nav>
    </header>
  );
};

export default Navbar;
