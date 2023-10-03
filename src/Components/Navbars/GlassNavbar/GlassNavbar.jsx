import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./GlassNavbar.css";

const Navbar = () => {
  const navItems = [
    {
      text: "Home",
      link: "/",
      icon: "https://api.iconify.design/uil:home-alt.svg?color=%231c1c1c",
    },
    {
      text: "About",
      link: "/",
      icon: "https://api.iconify.design/solar:info-square-linear.svg?color=%231c1c1c",
    },
    {
      text: "Services",
      link: "/",
      icon: "https://api.iconify.design/solar:settings-linear.svg?color=%231c1c1c",
    },
    {
      text: "Contact",
      link: "/",
      icon: "https://api.iconify.design/ep:service.svg?color=%231c1c1c",
    },
  ];

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.div
        transition={{ duration: 0.6 }}
        animate={hidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 30 },
          hidden: { y: -100 },
        }}
        className="sticky top-0 flex items-center font-bold justify-center rounded-full"
      >
        <div className="glass flex items-center justify-center border-2 p-2 border-black w-1/2 rounded-full">
            <ul className="flex items-center justify-center h-16 px-6 2xl:px-16">
              {navItems.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="hover:text-[#babbbd] hover:bg-[#3B7BD3] active:bg-[#3B7BD3] text-center"
                >
                  <li className="w-full flex font-semibold p-3 text-md cursor-pointer text-[#161b22] px-5">
                    <img src={item.icon} alt="icon" className="w-5 h-5 mr-2" />
                    <span className="md:hidden">{item.text}</span>
                  </li>
                </a>
              ))}
            </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
