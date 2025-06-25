// src/components/ResourceCard.jsx
import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
} from '@mui/material';

export default function ResourceCard({ resource, number }) {
    return (
        <Card className="shadow-md transition hover:shadow-lg">
            <CardContent>
                {/* Resource Title with number */}
                <Typography variant="h6" component="div" className="mb-2 font-semibold">
                    {number}. {resource.name}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                    {resource.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit Resource →
                </Button>
            </CardActions>
        </Card>
    );
}
