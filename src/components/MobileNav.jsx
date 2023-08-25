import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { nanoid } from "nanoid";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const navList = [
  { id: nanoid(), links: "/", name: "Home" },
  { id: nanoid(), links: "/about", name: "About" },
  { id: nanoid(), links: "/portfolio", name: "Portfolio" },
  { id: nanoid(), links: "/contact", name: "Contact" },
];

// Menu variants
const menuVariants = {
  hidden: {
    x: "150%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenuHandler = () => {
    return setOpenMenu(!openMenu);
  };

  const hideMenuHandler = () => {
    return setOpenMenu(false);
  };

  return (
    <nav className="text-primary lg:hidden">
      {/* nav open button */}
      <div className="text-3xl cursor-pointer" onClick={toggleMenuHandler}>
        <CgMenuRight />
      </div>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-[50%] absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        {/* icons */}

        <div
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
          onClick={hideMenuHandler}
        >
          <IoMdClose />
        </div>

        {/* menu list */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary ">
          {navList.map((items) => {
            return (
              <li key={items.id} onClick={hideMenuHandler}>
                <Link to={items.links}>{items.name}</Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
