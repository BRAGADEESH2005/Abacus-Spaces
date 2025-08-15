import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import "../styles/Footer.css";

function Footer() {
  return (
    <motion.div
      className="footer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Abacus Spaces. All rights reserved.
      </Typography>
    </motion.div>
  );
}

export default Footer;