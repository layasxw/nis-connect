import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        boxSizing: 'border-box',
        py: 2,
        px: 0, // No horizontal padding
        mt: 'auto',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        position: 'relative',
        left: 0,
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </Box>
  );
}
