import React from 'react';
import { motion } from 'framer-motion';
import DropForm from './DropForm';

const Drop = () => {
  return (
    <motion.div className="poap container"
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
    >
      <h2>
        Create Drop
      </h2>
      <br></br>
      <DropForm/>
    </motion.div>
  )
}

export default Drop;