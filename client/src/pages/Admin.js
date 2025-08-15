import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Admin.css"; // Assuming you have a CSS file for styles
import AdminLogin from "../components/AdminLogin";
// Dummy data for demo
const initialListings = [
  {
    id: 1,
    title: "Premium Office Space",
    description: "Modern office floor in Chennai, ready for move-in.",
    city: "Chennai",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Retail Location",
    description: "High-footfall retail space in Bangalore.",
    city: "Bangalore",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
  },
];

function Admin() {
  const [listings, setListings] = useState(initialListings);
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    category: "",
    image: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = (e) => {
    e.preventDefault();
    setListings([...listings, { ...form, id: Date.now() }]);
    setForm({ title: "", description: "", city: "", category: "", image: "" });
  };

  const handleDelete = (id) => setListings(listings.filter((l) => l.id !== id));

  const handleEdit = (id) => {
    const listing = listings.find((l) => l.id === id);
    setForm(listing);
    setListings(listings.filter((l) => l.id !== id));
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") {
      setIsAdmin(true);
    }
  }, []);

  if (!isAdmin) {
    return <AdminLogin onLogin={() => setIsAdmin(true)} />;
  }

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#1976d2", mb: 3 }}
        >
          Admin Panel
        </Typography>
        <form onSubmit={handleAdd}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Title"
                name="title"
                fullWidth
                required
                value={form.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                required
                value={form.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="City"
                name="city"
                fullWidth
                required
                value={form.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Category"
                name="category"
                fullWidth
                required
                value={form.category}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="Image URL"
                name="image"
                fullWidth
                required
                value={form.image}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={1}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ mt: 1 }}
              >
                {form.id ? "Update" : "Add"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          {listings.map((listing) => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#1976d2" }}
                  >
                    {listing.title}
                  </Typography>
                  <Typography variant="body2">{listing.description}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {listing.city} | {listing.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleEdit(listing.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(listing.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default Admin;
