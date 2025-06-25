import React, { useState } from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CategoryCard from './CategoryCard';
import CategoryDropdown from './CategoryDropdown';
import CloseIcon from '@mui/icons-material/Close';


export default function CategoryList({
    categories,
    allCategories,
    activeCategory,
    onCategoryChange,
}) {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className="flex flex-col px-4 py-12 max-w-6xl mx-auto">
            <div className="category mb-6 w-full">
                <Typography
                    variant="h4"
                    component="h2"
                    className="text-blue-800">
                    Categories
                </Typography>
            </div>
            <div>
                <div dir="ltr">
                    <div dir="rtl">
                        <div class="relative size-32 ...">
                            <div class="absolute start-0 top-0 size-14 ...">
                                <div className="flex items-center gap-2">
                                    <button
                                        aria-label="filter"
                                        onClick={() => setShowFilter((prev) => !prev)}
                                        size="small"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FilterListIcon fontSize="small" />
                                            <span className="text-xs font-small">Filter</span>
                                        </div>
                                    </button>

                                    {/* Show Close icon only if filter is active */}
                                    {showFilter && (
                                        <IconButton
                                            aria-label="close filter"
                                            onClick={() => {
                                                onCategoryChange(null); // Reset to show all categories
                                                setShowFilter(false);
                                            }}
                                            size="small"
                                            sx={{ color: '#1d4ed8' }}
                                        >
                                            <CloseIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>


            <div>
                {/* Dropdown below the header */}
                {showFilter && (
                    <div className="flex justify-center mb-6">
                        <div className="w-full md:w-60">
                            <CategoryDropdown
                                categories={allCategories}
                                activeCategory={activeCategory}
                                onChange={onCategoryChange}
                            />
                        </div>
                    </div>
                )}

                {/* Cards */}

                <Grid container spacing={4} justifyContent="center">
                    {categories.map((category) => (
                        <Grid item xs={12} sm={6} md={4} key={category.id} sx={{ paddingTop: '10px' }} >
                            <CategoryCard category={category} />
                        </Grid>
                    ))}
                </Grid>

            </div>
        </div>
    );
}

// import React from 'react';

// export default function CategoryList() {
//     return (
//         <div style={{ padding: '2rem', textAlign: 'center' }}>
//             <h2>Dummy Category List</h2>
//             <p>This is a placeholder component to test the build.</p>
//         </div>
//     );
// }

