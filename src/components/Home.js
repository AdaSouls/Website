import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
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
        The first platform for issuing Soulbound Tokens in Cardano
      </h4>
      <br></br>
      <Link to="#">
        <motion.button
          whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)"
          }}
        >
          Connect Wallet
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;