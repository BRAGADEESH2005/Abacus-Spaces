import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Listings.css";

function ListingCard({ listing }) {
  return (
    <motion.div
      className="listing-card"
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px rgba(25, 118, 210, 0.18)",
        rotate: -1,
      }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={listing.image}
        alt={listing.title}
        className="listing-card-media"
      />
      <div className="listing-card-content">
        <Typography className="listing-card-title" variant="h6">
          {listing.title}
        </Typography>
        <Typography className="listing-card-desc" variant="body2">
          {listing.description}
        </Typography>
        <Box className="listing-card-meta">
          <Typography variant="caption" color="text.secondary">
            {listing.city} | {listing.category}
          </Typography>
        </Box>
      </div>
    </motion.div>
  );
}

export default ListingCard;
