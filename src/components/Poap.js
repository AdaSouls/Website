import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Poap = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h2>
        Welcome to AdaSouls
      </h2>
      <h4>
        A fork of POAP deployed in Milkomeda
      </h4>
      <br></br>
      <Link to="/drop">
        <motion.button
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
        >
          Create Drop
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Poap;