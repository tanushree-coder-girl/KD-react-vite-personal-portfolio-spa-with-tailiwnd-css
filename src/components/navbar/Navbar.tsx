import { useState } from "react";
import { content } from "../../data/constants";

export default function Navbar() {
  const { navbar } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(1);

  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="fixed top-14 left-8 p-2 rounded-sm text-xl md:text-3xl text-bold bg-slate-200/60 z-[999] cursor-pointer"
      >
        {!showMenu ? <navbar.hamburger /> : <navbar.closeIcon />}
      </div>

      <nav
        className={`fixed  z-[999] flex items-center gap-1 sm:gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {navbar?.nav_items?.map((navItem) => (
          <a key={navItem.id}
            href={navItem.link}
            onClick={() => setActiveLink(navItem.id)}
            className={`text-sm md:text-xl p-2.5 rounded-full sm:cursor-pointer ${
              activeLink === navItem.id ? "bg-dark_primary text-white" : ""
            }`}
          >
            {<navItem.icon />}
          </a>
        ))}
      </nav>
    </div>
  );
}
