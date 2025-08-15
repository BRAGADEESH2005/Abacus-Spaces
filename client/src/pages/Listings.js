import React, { useState } from "react";
import FilterBar from "../components/FilterBar";
import ListingCard from "../components/ListingCard";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/Listings.css";

const listingsData = [
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
    description: "High-footfall retail locational space in Bangalore.",
    city: "Bangalore",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Startup Hub",
    description: "Flexible office space for startups in Hyderabad.",
    city: "Hyderabad",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Retail Showroom",
    description: "Spacious retail showroom in Kochi, ideal for brands.",
    city: "Kochi",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Corporate Tower",
    description: "Premium corporate tower floor in Bangalore.",
    city: "Bangalore",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Mall Retail Space",
    description: "Retail space inside a popular mall in Chennai.",
    city: "Chennai",
    category: "Retail",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const cities = ["Chennai", "Bangalore", "Hyderabad", "Kochi"];
const categories = ["Office", "Retail"];

function Listings() {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const filteredListings = listingsData.filter(
    (listing) =>
      (city === "" || listing.city === city) &&
      (category === "" || listing.category === category)
  );

  return (
    <div className="listings-container">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Typography className="listings-title" >
          Listings
        </Typography>
        <div className="filter-bar">
          <FilterBar
            cities={cities}
            categories={categories}
            city={city}
            category={category}
            setCity={setCity}
            setCategory={setCategory}
          />
        </div>
        <div className="listings-grid">
          {filteredListings.map((listing) => (
            <div className="listing-card-wrapper" key={listing.id}>
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>
        {filteredListings.length === 0 && (
          <Typography variant="body1" sx={{ mt: 4 }}>
            No listings found for selected filters.
          </Typography>
        )}
      </motion.div>
    </div>
  );
}

export default Listings;
