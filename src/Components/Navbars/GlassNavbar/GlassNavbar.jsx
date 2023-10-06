import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent } from 'framer-motion'
import "./GlassNavbar.css"

export default function Navbar() {

  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 100) setHidden(true);
    else setHidden(false);
  })

  return (
    <>
      <motion.div
        transition={{ duration: 0.6 }}
        animate={hidden ? "hidden" : "visible"}
        variants={{
          visible: { y: 30 },
          hidden: { y: -100 },
        }}
        className=" sticky top-0 flex items-center font-bold justify-center rounded-full"
      >
        <div className="glass flex items-center justify-center border-2 p-4 border-black w-3/4 rounded-full">
          <ul className='flex justify-center'>
            <li className='mx-3 cursor-pointer'> <Link to='/home'> Home</Link></li>
            <li className='mx-3 cursor-pointer'><Link to='/about'> About</Link></li>
            <li className='mx-3 cursor-pointer'><Link to='/services'> Services</Link></li>
            <li className='mx-3 cursor-pointer'><Link to='/contact'> Contact</Link></li>
          </ul>
        </div>
      </motion.div>
    </>
  )
}
