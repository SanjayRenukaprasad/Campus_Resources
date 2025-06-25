// src/components/Header.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export default function Header({ title, showBack = false }) {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="primary" elevation={2}>
            <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>

                <Box display="flex" alignItems="center">
                    {showBack && (
                        <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} sx={{ mr: 1 }}>
                            <ArrowBack />
                        </IconButton>
                    )}

                    <Box
                        display="flex"
                        alignItems="center"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    >
                        <img src="/vite.svg" alt="Campus Resources" className="h-8 mr-2" />
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Button color="inherit">Sign In</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
