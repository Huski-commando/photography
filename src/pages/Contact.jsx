import React from "react";
import womanImg from "../assets/img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-28 gap-x-8 text-center lg:text-left">
          <motion.div
            className="lg:flex-1 lg:pt-32 px-4"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={transition1}
          >
            <h1 className="h1">Contact Me</h1>
            <p className="mb-12">I would love to get suggestions from you.</p>

            {/* contact form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  type="text"
                  placeholder="Your name"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />

                <input
                  type="text"
                  placeholder="Your Email address"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                />
              </div>
              <input
                type="text"
                placeholder="Your message"
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                Send It
              </button>
            </form>
          </motion.div>

          <motion.div
            className="lg:flex-1"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
          >
            <img src={womanImg} alt="woman image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
