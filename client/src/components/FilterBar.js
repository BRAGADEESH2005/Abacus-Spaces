import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function FilterBar({ cities, categories, city, category, setCity, setCategory }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>City</InputLabel>
        <Select value={city} label="City" onChange={e => setCity(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {cities.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} label="Category" onChange={e => setCategory(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterBar;