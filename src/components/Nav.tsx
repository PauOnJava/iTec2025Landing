import NavMenu from "./NavMenu";
import { buttonVariants } from "./ui/button";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

export const navList: { text: string; link: string }[] = [
  { text: "Home", link: "/" },
  { text: "About", link: "/#about" },
  { text: "Services", link: "/#services" },
  { text: "Pricing", link: "/#pricing" },
  { text: "Contact", link: "/contact" },
];

function Nav() {
  return (
    <>
      <nav className="fixed z-[2] flex h-20 w-full items-center justify-center bg-white backdrop-blur-3xl">
        <div className="relative flex w-full max-w-[1400px] items-center justify-between px-5">
          <div className={`${pacifico.className} text-2xl text-blue-500`}>
            StudentHub
          </div>
          <NavMenu />
          <ul className="hidden items-center justify-center gap-2.5 md:flex">
            {navList.map((e, i) => {
              return (
                <li key={i} className="flex items-center justify-center">
                  <a
                    href={e.link}
                    className={`${buttonVariants({ variant: "link" })}`}
                  >
                    {e.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
}

export default Nav;
