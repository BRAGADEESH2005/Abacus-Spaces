import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Home.css";

const heroCards = [
  {
    title: "Business-first Approach",
    desc: "We negotiate the best lease terms and assist with interior setup.",
    icon: "🏢"
  },
  {
    title: "Market Insights",
    desc: "Deep market insights & strong landlord relationships.",
    icon: "📊"
  },
  {
    title: "Expansion",
    desc: "Expanding into India’s top 15 cities by 2026.",
    icon: "🌏"
  },
  {
    title: "Value & Growth",
    desc: "Every space delivers value, visibility, and growth potential.",
    icon: "🚀"
  }
];

function AnimatedHero() {
  return (
    <div className="hero-section">
      {/* Animated vibrant gradient background */}
      <motion.div
        className="hero-gradient-bg"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      {/* Large blurred cityscape background image */}
      <motion.div
        className="hero-bg-image"
        initial={{ scale: 1.05, opacity: 0.7 }}
        animate={{ scale: [1.05, 1.1, 1.05], opacity: [0.7, 0.8, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
        }}
      />
      {/* Floating shapes */}
      <motion.div
        className="hero-floating-circle"
        initial={{ y: 0 }}
        animate={{ y: [0, 30, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "10%",
          left: "6%",
          width: 100,
          height: 100,
          background: "rgba(25,118,210,0.18)",
        }}
      />
      <motion.div
        className="hero-floating-circle"
        initial={{ x: 0 }}
        animate={{ x: [0, 40, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          bottom: "12%",
          right: "8%",
          width: 140,
          height: 140,
          background: "rgba(66,165,245,0.15)",
        }}
      />
      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Find Your Perfect Business Space
        </h1>
        <p className="hero-subtitle">
          Premium offices & retail locations across South India’s top cities.
        </p>
        <a href="/listings" className="hero-btn">
          View Listings
        </a>
        <div className="hero-details-cards">
          <Typography  variant="h5" className="hero-details-title">
            Why Choose Abacus Spaces?
          </Typography>
          <div className="hero-cards-grid">
            {heroCards.map((card, idx) => (
              <motion.div
                className="hero-card"
                key={card.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="hero-card-icon">{card.icon}</div>
                <div>
                  <Typography className="hero-card-title" variant="subtitle1">
                    {card.title}
                  </Typography>
                  <Typography className="hero-card-desc" variant="body2">
                    {card.desc}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AnimatedHero;