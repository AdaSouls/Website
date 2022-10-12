import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Network = ({ chooseNetwork, token }) => {
  const networks = ['Milkomeda', 'Cardano', 'Algorand'];

  return (
    <motion.div className="network container"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
    >

      <h3>Step 1: Choose Your Network</h3>
      <ul>
        {networks.map(network => {
          let spanClass = token.network === network ? 'active' : '';
          return (
            <motion.li key={network} onClick={() => chooseNetwork(network)}
              whileHover={{ 
                scale: 1.3,
                originX: 0,
                color: "#f8e112"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{ network }</span>
            </motion.li>
          )
        })}
      </ul>

      {token.network && (
        <motion.div className="next"
          initial={{ x: '-100vw '}}
          animate={{ x: 0 }}
          transition={{type: "spring", stiffness: 120 }}
        >
          <Link to="/type">
            <motion.button 
              whileHover={{ 
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
              }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Network;