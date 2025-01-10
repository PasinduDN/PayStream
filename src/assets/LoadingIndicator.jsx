import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import Colors from './Styles/Colors';

const LoadingIndicator = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full screen height
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light background for the loader
                position: 'absolute',
                width: '100%',
            }}
        >
            <CircularProgress
                sx={{
                    color: Colors.palette.primary.dark,
                    size: '80px'
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    mt: 2,
                    color: Colors.palette.primary.dark
                }}>
                Loading, please wait...
            </Typography>
        </Box>
    );
};

export default LoadingIndicator;
