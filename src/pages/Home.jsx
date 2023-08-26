import React from "react";
import WomanImg from "../assets/img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Home = () => {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
    >
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center ">
          {/* text */}
          <motion.div
            className="w-full pt-28 pb-5 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
          >
            <h1 className="h1">
              photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Los Angeles, USA
            </p>
            <motion.div
              whileHover={{
                textShadow: " 0 0 2px rgba(255,255,255)",
                boxShadow: "0 10px 18px rgba(0,0,0, 0.5)",
                scale: 1.05,
                // borderRadius: "50%",
              }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                to="/contact"
                className="btn mb-[30px] lg:mb-0 tracking-[5px]"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
          {/* image */}
          <div className="flex justify-end h-auto ">
            <motion.div
              className="relative lg:-right-40 overflow-hidden object-contain"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
            >
              <motion.img
                src={WomanImg}
                alt="woman image"
                whileHover={{ scale: 1.1 }}
                transition={transition1}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
