import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import "../styles/About.css";

const team = [
  {
    name: "Arjun Rao",
    phone: "+91 98765 43210",
    role: "Leasing Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Menon",
    phone: "+91 91234 56789",
    role: "Client Relations",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

function About() {
  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography className="about-title" variant="h3">
          About Us
        </Typography>
        <div className="about-flex">
          <div className="about-content">
            <Typography variant="body1" className="about-text">
              <span className="about-highlight">Abacus Spaces</span> is a young and dynamic commercial real estate brokerage focused solely on office and retail leasing across Tamil Nadu, Kerala, Andhra Pradesh and Karnataka.
            </Typography>
            <Typography variant="body1" className="about-text">
              <span className="about-label">Mission:</span> We connect ambitious businesses with spaces that mean business.
            </Typography>
            <Typography variant="body1" className="about-text">
              <span className="about-label">Vision:</span> Expand into India’s top 15 cities within 2026, and step onto the international stage.
            </Typography>
            <Typography variant="body1" className="about-text">
              <span className="about-label">What sets us apart?</span> A business-first approach. We don’t just show properties; we negotiate the best lease terms and assist with interior setup to make spaces move-in ready.
            </Typography>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="About Abacus Spaces"
            className="about-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        {/* Our Team Section */}
        <div className="about-team-section">
          <Typography variant="h5" className="about-team-title">
            Our Team
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {team.map((person, idx) => (
              <Grid item xs={12} sm={6} md={4} key={person.name}>
                <Paper elevation={3} className="about-team-card">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="about-team-image"
                  />
                  <div className="about-team-info">
                    <Typography variant="subtitle1" className="about-team-name">
                      {person.name}
                    </Typography>
                    <Typography variant="body2" className="about-team-role">
                      {person.role}
                    </Typography>
                    <Typography variant="body2" className="about-team-phone">
                      {person.phone}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </motion.div>
    </div>
  );
}

export default About;