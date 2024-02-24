import Link from "next/link";
import React from "react";

interface NavbarProps {
  onPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onPage }) => {
  return (
    <div>
      <ul className="menu menu-horizontal menu-xs md:menu-md font-semibold  bg-[#6d6c6c3c]  text-white rounded-box relative">
        <li
          className={` ${
            onPage == "Home" ? "text-[#959595]" : ""
          }   hover:text-[#959595] rounded-box `}
        >
          <Link href="/">HOME</Link>
        </li>
        <li
          className={` ${
            onPage == "Projects" ? "text-[#959595]" : ""
          }   hover:text-[#959595] rounded-box `}
        >
          <Link href="/projects">PROJECTS</Link>
        </li>
        <li
          className={` ${
            onPage == "About" ? "text-[#959595]" : ""
          }   hover:text-[#959595] rounded-box `}
        >
          <Link href="/about">ABOUT</Link>
        </li>
        <li
          className={` ${
            onPage == "Contact" ? "text-[#959595]" : ""
          }   hover:text-[#959595] rounded-box `}
        >
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
