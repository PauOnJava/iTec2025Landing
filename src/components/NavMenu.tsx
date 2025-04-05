"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { navList } from "./Nav";
import { buttonVariants } from "./ui/button";
import { useState } from "react";

function NavMenu() {
  const [state, setstate] = useState<boolean>(false);
  return (
    <>
      <div className="z-[99] flex flex-col items-center justify-center md:hidden">
        {state ? (
          <XIcon
            className="hover:cursor-pointer"
            onClick={() => {
              setstate(!state);
            }}
          />
        ) : (
          <MenuIcon
            className="hover:cursor-pointer"
            onClick={() => {
              setstate(!state);
            }}
          />
        )}
      </div>
      <ul
        className={`fixed left-0 top-0 ${state ? "flex" : "hidden"} h-screen w-full flex-col items-center justify-center gap-5 bg-white md:hidden`}
      >
        {navList.map((e, i) => {
          return (
            <li key={i} className="flex items-center justify-center">
              <a
                href={e.link}
                className={`${buttonVariants({ variant: "link" })} !text-4xl`}
              >
                {e.text}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavMenu;
