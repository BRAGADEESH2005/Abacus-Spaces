import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import "../styles/Contact.css"; // Assuming you have a CSS file for styles

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent! (Demo)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                fullWidth
                required
                value={form.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                required
                value={form.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                required
                value={form.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80"
              alt="Contact"
              style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default Contact;