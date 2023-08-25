import Socials from "./Socials";
import Logo from "../assets/img/header/logo.svg";
import MobileNav from "./MobileNav";

import { Link } from "react-router-dom";
import { navList } from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center ">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to="/" className="max-w-[200px]">
          <img src={Logo} alt="logo" />
        </Link>

        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          {navList.map((items) => {
            return (
              <Link
                key={items.id}
                to={items.links}
                className="text-[#696c6d] hover:text-primary transition"
              >
                {items.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* social */}
      <Socials />

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
