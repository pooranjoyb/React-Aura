import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./GlassNavbar.css";
import Footer from "../../Footerbars/Footer";
import Home from "../../HomeBar/Home";
import Service from "../../ServiceBar/Service";
export default function Navbar() {
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
          visible: { y: 40 },
          hidden: { y: -100 },
        }}
        className=" sticky top-0 flex items-center font-bold justify-center rounded-full"
      >
        <div className="glass flex items-center justify-center border-2 p-4 border-black w-3/4 rounded-full">
          <ul className="flex justify-center">
            <a href="#home">
              <li className="mx-3 cursor-pointer">Home</li>
            </a>
            <li className="mx-3 cursor-pointer">About</li>
            <a href="#service">
              <li className="mx-3 cursor-pointer">Services</li>
            </a>
            <a href="#contact">
              <li className="mx-3 cursor-pointer">Contact</li>
            </a>
          </ul>
        </div>
      </motion.div>
      <div style={{ height: "100vh" }}></div>
      <Home />
      <div style={{ height: "100vh" }}></div>
      <Service />
      <div style={{ height: "100vh" }}></div>
      <Footer />
    </>
  );
}
