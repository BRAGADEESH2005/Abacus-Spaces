import React, { useState } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/Contact.css";

const infoVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="contact-left"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div variants={infoVariants} custom={0}>
          <div className="contact-title">Contact Us</div>
        </motion.div>
        <div className="contact-info-bar">
          <motion.div
            className="contact-info-row"
            variants={infoVariants}
            custom={1}
          >
            <FiMapPin className="contact-info-icon" />
            <span>
              Abacus Spaces, 2nd Floor, Business Tower,
              <br />
              MG Road, Bengaluru, Karnataka, India
            </span>
          </motion.div>
          <motion.div
            className="contact-info-row"
            variants={infoVariants}
            custom={2}
          >
            <FiPhone className="contact-info-icon" />
            <span>
              +91 98765 43210
              <br />
              +91 91234 56789
            </span>
          </motion.div>
          <motion.div
            className="contact-info-row"
            variants={infoVariants}
            custom={3}
          >
            <FiMail className="contact-info-icon" />
            <span>info@abacusspaces.com</span>
          </motion.div>
          <motion.div
            className="contact-info-row"
            variants={infoVariants}
            custom={4}
          >
            <FiClock className="contact-info-icon" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </motion.div>
          <motion.div
            className="contact-social-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-icon"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="contact-right"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0,x:40, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Typography className="contact-form-title">
            Send Us a Message
          </Typography>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={form.message}
            onChange={handleChange}
          />
          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
