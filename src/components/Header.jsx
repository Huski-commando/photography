import Socials from "./Socials";
import Logo from "../assets/img/header/logo.svg";
import MobileNav from "./MobileNav";

import { Link, NavLink } from "react-router-dom";
import { navList } from "./MobileNav";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const className = ({ isActive }) => (isActive ? `active` : ``);

const Header = () => {
  return (
    <motion.header
      className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <div>
          <Link to="/" className="max-w-[200px]">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        {/* nav - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold ">
          {navList.map((items) => {
            return (
              <NavLink
                key={items.id}
                to={items.links}
                className="text-[#696c6d] hover:text-primary transition"
              >
                {items.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* social */}
      <Socials />

      {/* Mobile Nav */}
      <MobileNav />
    </motion.header>
  );
};

export default Header;
