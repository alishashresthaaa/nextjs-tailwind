import Image from "next/image";
import Link from "next/link";
import logo from "src/assets/svg/logo.svg";
import { useTheme } from "src/context/theme";
import { headerNavList, NavTypes } from "./header.data";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const HeaderComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <nav className="relative bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger button */}
          <button
            type="button"
            className="sm:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-2 focus:ring-white"
          >
            {!mobileNav && (
              <GiHamburgerMenu
                className="block h-6 w-6"
                onClick={() => setMobileNav(!mobileNav)}
              />
            )}
            {mobileNav && (
              <IoMdClose
                className="block h-6 w-6"
                onClick={() => setMobileNav(!mobileNav)}
              />
            )}
          </button>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/" passHref>
              <span className="h-[28px] w-auto  my-auto ">
                <Image src={logo} alt="Logo" />
              </span>
            </Link>

            {/* Display menu from min-width: 640px */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {headerNavList.map((singleNav: NavTypes, index: number) => {
                  return (
                    <Link href={singleNav.link} key={index}>
                      <a className="text-gray-500 hover:text-gray-900 dark:text-white px-3 py-2 rounded-md text-base font-medium">
                        {singleNav.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Theme toggler */}
          <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === "dark" ? (
              <FaSun
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-500 dark:text-white text-2xl cursor-pointer tansition-all ease-in duration-100 hover:rotate-[-45deg]"
              />
            ) : (
              <FaMoon
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-gray-500 dark:text-white text-2xl cursor-pointer tansition-all ease-in duration-100 hover:rotate-[-45deg]"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNav && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {headerNavList.map((singleNav: NavTypes, index: number) => {
              return (
                <Link href={singleNav.link} key={index}>
                  <a className="text-gray-500 hover:text-gray-900 hover:bg-gray-500 dark:text-whit block px-3 py-2 rounded-md text-base font-medium">
                    {singleNav.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderComponent;
