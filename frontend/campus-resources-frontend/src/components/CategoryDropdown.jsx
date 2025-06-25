// src/components/CategoryDropdown.jsx
import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';

export default function CategoryDropdown({ categories, activeCategory, onChange }) {
    return (
        <div className="w-full max-w-xs mx-auto mb-4"
            style={{ paddingBottom: '10px', paddingLeft: '10px', paddingTop: '10px' }}>
            <FormControl sx={{ minWidth: 240 }}>
                <InputLabel id="category-label">Select Category</InputLabel>
                <Select
                    labelId="category-label"
                    value={activeCategory || ''}
                    label="Select Category"
                    onChange={(e) => {
                        const value = e.target.value;
                        onChange(value === '' ? null : value); // null means show all
                    }}
                >
                    <MenuItem value="">
                        All Categories
                    </MenuItem>
                    {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                            {category.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
