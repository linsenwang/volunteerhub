import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionContainer = ({ title, children, marginTop = 4 }) => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center', mt: marginTop }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default SectionContainer;
