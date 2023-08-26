import React from "react";
import image1 from "../assets/img/portfolio/1.png";
import image2 from "../assets/img/portfolio/2.png";
import image3 from "../assets/img/portfolio/3.png";
import image4 from "../assets/img/portfolio/4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Portfolio = () => {
  return (
    <motion.section className="section">
      <div className="container mx-auto h-full  relative">
        <div className="flex flex-col h-full lg:flex-row gap-x-24 items-center justify-start text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            className="flex flex-col lg:items-start"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={transition1}
          >
            <h1 className="h1 text-center">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              <br />
              <span className="max-w-md">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </span>
            </p>
            <Link to="/contact" className="btn mb-[30px] mx-auto lg:mx-0">
              Hire Me
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2  gap-0 lg:gap-2 overflow-hidden"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
          >
            <div className="max-w-[250px] h-full lg:max-w-[320px] lg:h-[220px] mb-0 overflow-hidden">
              <img
                src={image1}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] lg:h-[220px]  overflow-hidden">
              <img
                src={image2}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] lg:h-[220px] overflow-hidden">
              <img
                src={image3}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="max-w-[250px] lg:max-w-[320px] lg:h-[220px]  overflow-hidden">
              <img
                src={image4}
                className="object-cover h-full w-full hover:scale-110 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
