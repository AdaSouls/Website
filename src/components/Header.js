import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href='/'>
          <img src="./logo.svg" className="filter-white" alt="logo" />
        </a>
      </div>
      <motion.div className="title" 
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <a href='/'>
          <h1>AdaSouls</h1>
        </a>
      </motion.div>
    </header>
  )
}

export default Header;