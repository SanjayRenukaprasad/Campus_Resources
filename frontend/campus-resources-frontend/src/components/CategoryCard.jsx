import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
} from '@mui/material';

export default function CategoryCard({ category }) {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate(`/category/${category.id}`);
    };

    const bgImage = `/public/${category.name.toLowerCase().replace(/\s+/g, '')}.jpg`;

    return (
        <Card
            className="shadow-lg transition hover:shadow-2xl"
            sx={{
                width: 300,              // fixed width
                height: 400,             // fixed height
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 250,           // fixed image height
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" className="font-semibold text-gray-800">
                    {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Explore helpful resources related to {category.name.toLowerCase()}.
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleExplore}
                        className="ml-2"
                    >
                        Explore
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
}
