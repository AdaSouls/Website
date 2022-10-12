import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Type = ({ chooseType, token }) => {
  let types = ['Soulbound Token', 'POAP', 'DID', 'Verifiable Credential'];

  return (
    <div className="types container">
      
      <h3>Step 2: Choose Type</h3>
      <ul>
        {types.map(type => {
          let spanClass = token.type === type ? 'active' : '';
          return (
            <motion.li key={type} onClick={() => chooseType(type)}
              whileHover={{ 
                scale: 1.3,
                originX: 0,
                color: "#f8e112"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{ type }</span>
            </motion.li>
          )
        })}
      </ul>

      {token.type && (
        <motion.div className="next"
          initial={{ x: '-100vw '}}
          animate={{ x: 0 }}
          transition={{type: "spring", stiffness: 120 }}
        >
          <Link to="/mint">
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

    </div>
  )
}

export default Type;